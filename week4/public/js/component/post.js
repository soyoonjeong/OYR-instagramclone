const post = {
    userImg : ["../image/user-removebg-preview.png", "../image/user2-removebg-preview.png"],
    userName : ["4o9oon",'open-year-round'],
    postImg : ["../image/post.PNG","../image/post2.PNG"],
    like : [0,1],
    postContent : ["어쩌구저쩌구1","어쩌구저쩌구2"],
    postTime :[49, 50],
    heart : ["../image/empty-heart.png", "../image/empty-heart.png"],
    bookmark : ["../image/empty-bookmark.png", "../image/empty-bookmark.png"],
}
const postList = document.querySelector(".post-list");
const postNum = post.userImg.length;
for(let i =0; i<postNum; i++){
    const postElement = document.createElement("li");
    postElement.classList.add("post-container","white-box");
    postElement.innerHTML = `<div class="post-header">
    <div class="post-writer">
      <img src=${post.userImg[i]} class="post-writer-img" style="height:45px;">
      <span class="user-name post-name">${post.userName[i]}</span>
    </div>
    <img src="../image/dots.png" class="dots-modal-open" style="width: 20px">
  </div>
  <img src=${post.postImg[i]} class="post-photo" style="width : 614px;">
  <div class="post-icons">
    <div class="post-icons-left">
      <img src=${post.heart[i]} style="margin-right : 20px;">
      <img src="../image/comment.png" class="comment-modal-open" id="0" style="margin-right : 20px;">
      <img src="../image/send.png">
    </div>
    <img src=${post.bookmark[i]} class="bookmark"><!--책갈피--> 
  </div>
  <span class="post-like">좋아요 ${post.like[i]}개</span>
  <div class="post-content">
    <span class="user-name">${post.userName[i]}</span>
    <span class="post-content-text">${post.postContent[i]}</span>
    <span>...더보기</span>
  </div>
  <span class="post-time">${post.postTime[i]}분 전</span>
  <div class="post-comments">
    <img src="../image/smile.png" style="width: 20px">
    <input class="post-comments-input" placeholder="댓글 달기...">
    <span class="blue-span">게시</span>
  </div>`;
  postList.appendChild(postElement);
}