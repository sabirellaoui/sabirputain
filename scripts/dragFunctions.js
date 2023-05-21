// tuto drag & drop: https://stackabuse.com/drag-and-drop-in-vanilla-javascript/
let dragging = null;


function followMouse(e){
    const follow = document.querySelector('.dragging');
    console.log(e, follow);
    // console.log('in');
    // console.log(e.pageX,e.pageY);
    // follow.style.left = `${e.pageX + follow.offsetWidth/2}px`;
    // follow.style.top = `${e.pageX + follow.offsetHeight/2}px`;
}

  function dragStart() {
    dragging = this;
    dragging.classList.add('dragging');
    setTimeout(()=> this.classList.add('invisible'), 0);

    // document.addEventListener('mousemove', followMouse);
    // document.addEventListener('mousemove', followMouse);
}


function dragEnd() {
    dragging.classList.remove('dragging');
    dragging = null;
    setTimeout(()=> this.classList.remove('invisible'), 0);
    for(i=0; i< cardSection.childElementCount; i++){
        cardSection.children[i].id = i;
    }
    saveList();
    // document.removeEventListener('mousemove', followMouse);
}


function dragEnter() {
    if(dragging && this.classList.contains('carte')){
        if(this.id < dragging.id){
            dragging.parentNode.insertBefore(dragging, this);
        }else if(this.id > dragging.id){
            dragging.parentNode.insertBefore(dragging, this.nextElementSibling);
        }
    }
}


function dragLeave() {
    for(i=0; i< cardSection.childElementCount; i++){
        cardSection.children[i].id = i;
    }
}
