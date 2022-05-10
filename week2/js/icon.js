function icon_click(icon){
    if(icon.src.includes("empty")){
        icon.src = icon.src.replace("empty", "full");
    }
    else{
        icon.src = icon.src.replace("full", "empty");
    }
}