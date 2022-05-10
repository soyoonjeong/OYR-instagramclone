// 모듈
const express = require('express');
const app = express();
const indexRouter = require('./router/index');
const port = process.env.PORT||3000;
const session = require('express-session'); 
const MySQLStore = require('express-mysql-session')(session);
const options = {
    host:'localhost',
    port :3306,
    user:'root',
    password:'0000',
    database:'instagram'
};
const sessionStore = new MySQLStore(options);

// 앱 세팅
app.set('views', __dirname + '/views'); // 서버가 읽을 수 있도록 HTML의 위치를 정의
app.set('view engine', 'ejs'); // 서버가 HTML 렌더링을 할 때, EJS엔진을 사용하도록 설정
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended : true})); //URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(session({
    secret:"openyearround10",
    resave:false, //세션을 저장하고 불러올 때 세션을 다시 저장할지 여부
    saveUninitialized:true, // 세션을 저장할 때 초기화를 할지 여부
    store:sessionStore
}))
// 라우팅
app.use('/', indexRouter);

app.listen(port, ()=>{
    console.log("success");
});