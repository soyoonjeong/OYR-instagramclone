function sendUserInfo(event){
    event.preventDefault();
    const id = document.querySelector("#id").value;
    const password = document.querySelector("#password").value;
    const info = {id:id, password:password};
    console.log(info);
    
    fetch("http://localhost:3000",{
        method:'POST',
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(info),
    });
    
    
}
