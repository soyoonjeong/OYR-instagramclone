
const bookmark = document.querySelectorAll(".bookmark");
bookmark.forEach(element=>{
    element.addEventListener("click", function(){
        const bmIdx = Array.from(bookmark).indexOf(element);
        const bmpostIdx = (bmIdx>=postNum)?commentIdx:bmIdx;
        if(element.src.includes("empty")){
            element.src = element.src.replace("empty", "full");
        }
        else{
            element.src = element.src.replace("full", "empty");
        }
        bookmark[bmpostIdx].src= element.src; //모달과 게시글 동기화 
        post.bookmark[bmpostIdx] = element.src;
    })
});


const heart = document.querySelectorAll(".post-icons-left img:first-child");
const like = document.querySelectorAll(".post-like");
heart.forEach(element=>{
    element.addEventListener("click",function(){
        const heartIdx = Array.from(heart).indexOf(element);
        const hpostIdx = (heartIdx>=postNum)?commentIdx:heartIdx;
        if(element.src.includes("empty")){
            element.src = element.src.replace("empty", "full");
            post.like[hpostIdx]+=1;
        }
        else{
            element.src = element.src.replace("full", "empty");
            post.like[hpostIdx]-=1;
        }
        like[heartIdx].innerText = `좋아요 ${post.like[hpostIdx]}개`;
        like[hpostIdx].innerText = `좋아요 ${post.like[hpostIdx]}개`;
        heart[hpostIdx].src = element.src; //색칠
        post.heart[hpostIdx] = element.src;
        
    })
});