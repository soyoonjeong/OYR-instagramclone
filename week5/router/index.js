const express = require('express')
const router = express.Router();
const mysql = require('mysql');
const instaDB = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'0000',
    database:'instagram'
});
instaDB.connect(function(err){
    if(err) throw err;
    console.log('Connected!');
});
let postlist;
router.get('/', (req, res)=>{
    if(req.session.user){
        const userID = req.session.user.user_ID;
        const postquery = `select * from post join user where post.user_ID = user.user_ID;`;
        instaDB.query(postquery, function(error, data){
            if(error) throw error;
            const filteredPost = data.filter(post => post.user_ID!=userID);
            postlist = [];
            filteredPost.forEach(item=>{
                const postjson = {content : item.content, 
                    post_image : item.post_image, 
                    user_ID : item.user_ID, 
                    likeNum : item.likeNum,
                    user_image : item.user_image,
                    like_image : item.like_image,
                    bm_image : item.bm_image,
                    /*시간 고치기*/
                };
                postlist.push(postjson);
            });
            res.render("main.ejs", {user:req.session.user, post:postlist, modal:"none",modalPost:postlist[0]});
        });
    }else{
        res.render("index.ejs", {message:" "});
    }
});
router.get('/logout', (req, res)=>{
    if(req.session.user){
        req.session.destroy(function(err){
            res.redirect("/");
        });
    }
});
router.get('/modal', (req,res)=>{
    res.render("main.ejs", {user:req.session.user, post:postlist, modal:"flex",modalPost:postlist[0]});
})
router.post('/', (req, res)=>{
    const id = req.body.id;
    const password = req.body.password;
    const reg_id = /^[a-z0-9_]{4,20}$/; // 소문자 + 숫자 + 언더바 허용 4~20자리
    const reg_pw = /(?=.*[a-zA-ZS])(?=.*?[#?!@$%^&*-]).{6,24}/; // 문자와 특수문자 조합의 6~24 자리
    if(!reg_id.test(id)){
        let data = "아이디를 소문자 + 숫자 + 언더바 허용 4~20자리 형식을 맞춰 작성해주세요!";
        res.render('index.ejs',{message:data});
    }else if(!reg_pw.test(password)){
        let data = "비밀번호 문자와 특수문자 조합의 6~24 자리 형식을 맞춰 작성해주세요!";
        res.render('index.ejs',{message:data});``
    }else{
        instaDB.query("SELECT * FROM user where user_ID=? and password=?", [id,password], function(error, data){
            if(error) throw error;
            if(data.length!=0){ //로그인 성공
                req.session.user = data[0];
                req.session.save(function(){ //클라이언트에게 세션 발급
                    res.redirect('/');
                }); 
            }else{
                let data = "회원가입을 진행해주세요!";
                res.render("index.ejs", {message:data});
            }
        })
    }
});
/*
instaDB.query("select * from post join user where post.user_ID = user.ID", function(error, data){
    if(error) throw error;
    console.log(data);

})*/
module.exports = router;