/*require은 nodeJS에서 다른 패키지를 불러올 때 사용되는 키워드*/
const express = require('express');
const app = express();
const port = process.env.PORT||3000;


app.get('/',function(req,res){
    res.json({
        succeess:true,
    });
});
app.listen(port, ()=>{
    console.log(`server is llistening at locahost:${process.env.PORT}`);
});