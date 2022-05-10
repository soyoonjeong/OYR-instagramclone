import instaDB from "../app";

const output = {
    index : (req, res)=>{
        res.render("index.ejs");
    },
    main:(req, res)=>{
        res.render("main.ejs");
    },
    modal : (req, res)=>{
        res.render("modal.ejs");
    }
};

const login = (req, res)=>{
    const reg_id = /^[a-z0-9_]{4,20}$/; // 소문자 + 숫자 + 언더바 허용 4~20자리
    const reg_pw = /(?=.*[a-zA-ZS])(?=.*?[#?!@$%^&*-]).{6,24}/; // 문자와 특수문자 조합의 6~24 자리
    instaDB.query("SELECT * FROM user", function(error, data){
        console.log(data);
    })
    const user = {
        id : req.body.id,
        password:req.body.password
    };
    if(reg_id.test(user.id)){
        res.send()
    }
        /*
    }else if(user.id!=req.body.id){
        res.redirect("/wrong-id");
        //res.send("입력한 사용자 이름을 사용하는 계정을 찾을 수 없습니다. 사용자 이름을 확인하고 다시 시도하세요.");
    }else if(user.id==req.body.id && user.password!=req.body.password){
        res.redirect("/wrong-password");
        //res.send("잘못된 비밀번호입니다. 다시 확인하세요.");
    }*/
};

module.exports={
    output, login
};
