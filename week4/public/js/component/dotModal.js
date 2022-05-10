const dots = document.querySelector("#dots-modal-wrapper");
const dotsOpen = document.querySelectorAll(".dots-modal-open");
const dotsClose = document.querySelector(".dots-modal-close");

dotsOpen.forEach(element => {
    element.addEventListener("click", function(){
        dots.style.display="flex"; 
    });
});
dotsClose.addEventListener("click", function(){
    dots.style.display="none"; 
});
dots.addEventListener("click", function(event){ //모달의 목록이 아니면 취소 
    if(!event.target.classList.contains("dots-modal-li")){
        dots.style.display="none"; 
    }
})