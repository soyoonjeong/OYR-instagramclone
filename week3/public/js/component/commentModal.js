const comment = document.querySelector(".comment-modal-wrapper");
const commentOpen = document.querySelectorAll(".comment-modal-open");
const commentClose = document.querySelector(".comment-modal-close");

// 힘들다,,
// comment 아이콘에 id를 줘서 인덱스처럼 사용했음
const modalImg = document.querySelector(".comment-modal img");
const modalWriterImg = document.querySelectorAll(".modal-writer-img");
const modalName = document.querySelectorAll(".comment-modal .user-name");
const modalContent = document.querySelector(".modal-content-right span:last-child");
const modalLike = document.querySelector(".comment-modal .post-like");
const modaltime = document.querySelector(".comment-modal .post-time");

const postImg = document.querySelectorAll(".post-photo");
const postWriterImg = document.querySelectorAll(".post-writer-img");
const postName = document.querySelectorAll(".post-name");
const postContent = document.querySelectorAll(".post-content-text");
const postLike = document.querySelectorAll(".post-like");
const posttime = document.querySelectorAll(".post-time");
/*
function modalOpen(){
    fetch("https://localhost:3000/main/modal",{
        method:'GET',})
    .then(res=>res = res.json())
    .then(res=>{
        if(res.success){
            comment.style.display = "flex";
        }
    })
}*/

commentOpen.forEach(element => {
    element.addEventListener("click", function(event){
        let num = parseInt(event.target.id);
        
        modalImg.src = postImg[num].src;
        modalWriterImg.forEach(element=>{
            element.src = postWriterImg[num].src;
        })
        modalName.forEach(element=>{
            element.innerText = postName[num].innerText;
        })
        console.log(postContent[num].innerText);
        modalContent.innerText = postContent[num].innerText;
        modalLike.innerText = postLike[num].innerText;
        modaltime.innerText = posttime[num].innerText;
        comment.style.display = "flex";
        /*
        fetch("http://localhost:3000/main",{
            method:'GET',})
        .then(res=>res = res.json())
        .then(res=>{
            console.log(res);
            console.log(res.success);
            if(res.success){
                console.log("들어왔다!!");
                //comment.style.display = "flex";
                location.href='https://localhost:3000/main/modal';
                modalOpen();
            }
        });*/
        
    });
});
commentClose.addEventListener("click", function(){
    comment.style.display="none"; 
});

