


function playSound(e){
    const target = e.target;
    if( (target.classList.contains('carte') || target.parentNode.classList.contains('carte')) && !target.classList.contains('fa-trash-can')){
        const bassem = document.querySelector(".mp3-bassem");
        bassem.play();

    }
};
