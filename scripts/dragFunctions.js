// tuto drag & drop: https://stackabuse.com/drag-and-drop-in-vanilla-javascript/
let dragging = null;

  function dragStart() {
    dragging = this;
    setTimeout(()=> this.classList.add('invisible'), 0);
}


function dragEnd() {
    dragging = null;
    setTimeout(()=> this.classList.remove('invisible'), 0);
    for(i=0; i< cardSection.childElementCount; i++){
        cardSection.children[i].id = i;
    }
    saveList();
}


function dragEnter() {
    if(dragging && this.classList.contains('carte')){
        console.log(this);
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