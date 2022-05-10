const comment = document.querySelector(".comment-modal-wrapper");
const commentOpen = document.querySelectorAll(".comment-modal-open");
const commentClose = document.querySelector(".comment-modal-close");
/*게시글마다 모달 내용 다름*/
let commentIdx;
commentOpen.forEach(element=>{
  element.addEventListener("click", function(){
    commentIdx = Array.from(commentOpen).indexOf(element);
    const modalImg = document.querySelector(".comment-modal img");
    const modalWriterImg = document.querySelectorAll(".modal-writer-img");
    const modalName = document.querySelectorAll(".comment-modal .user-name");
    const modalContent = document.querySelector(".modal-content-right span:last-child");
    const modalLike = document.querySelector(".comment-modal .post-like");
    const modaltime = document.querySelector(".comment-modal .post-time");
    const modalheart = document.querySelector(".comment-modal .heart");
    const modalbm = document.querySelector(".comment-modal .bookmark");
    modalImg.src = post.postImg[commentIdx];
    modalWriterImg.forEach(element=>{
        element.src = post.userImg[commentIdx];
    })
    modalName.forEach(element=>{
        element.innerText = post.userName[commentIdx];
    })
    modalContent.innerText = post.postContent[commentIdx];
    modalLike.innerText = `좋아요 ${post.like[commentIdx]}개`;
    modaltime.innerText = `${post.postTime[commentIdx]}분 전`;
    modalheart.src = post.heart[commentIdx];
    modalbm.src = post.bookmark[commentIdx];
    comment.style.display="flex";
  })
});
commentClose.addEventListener("click", function(){
    comment.style.display="none"; 
});
comment.addEventListener("click", function(event){
    if(event.target.classList.contains("comment-modal-wrapper")){
        comment.style.display='none';
    }
})
/*모달 댓글추가*/
const modalForm = document.querySelector(".modal-comments");
const commentUl = document.querySelector(".modal-content ul")
modalForm.addEventListener("submit",function(event){
    event.preventDefault();
    const comment = modalForm.querySelector("input");
    const newComment = document.createElement("li");
    newComment.innerHTML = `<div class="flex-display">
    <img src="../image/user3-removebg-preview.png" class="modal-writer-img" style="height:45px;">
    <div class="modal-content-right">
      <div>
        <span class="user-name">open.year.round</span>
        <span>${comment.value}</span> <!--댓글 내용-->
      </div>
      <div class="flex-display">
        <span class="modal-content-time" style="font-size : 12px;">지금</span>
        <a>답글달기</a>
        <img src="../image/dots.png" class="recomment-modal-open">
      </div>
    </div>
  </div>
  <img src="../image/empty-heart.png" style="width : 13px; height : 13px;">`;
    commentUl.appendChild(newComment);
    comment.value = "";
    /*모달 댓글삭제*/
    const recomment = document.querySelector("#recomment-modal-wrapper");
    const recommentOpen = document.querySelectorAll(".recomment-modal-open");
    const recommentClose = document.querySelector(".recomment-modal-close");
    const commentDelete = document.querySelector(".comment-delete");

    recommentOpen.forEach(element=>{
      element.addEventListener("click", function(event){
        clickedComment = event.target.parentElement.parentElement.parentElement.parentElement;
        recomment.style.display="flex";
      });
    });
    recommentClose.addEventListener("click", function(){
      recomment.style.display="none";
    });
    recomment.addEventListener("click", function(event){ //모달의 목록이 아니면 취소 
      if(!event.target.classList.contains("dots-modal-li")){
          recomment.style.display="none"; 
      }
    });
    commentDelete.addEventListener("click",function(){
      event.preventDefault();
      commentUl.removeChild(clickedComment); //에러뜸 왜뜨지
      recomment.style.display="none"; 
    });
})

