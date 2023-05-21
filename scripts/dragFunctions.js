// tuto drag & drop: https://stackabuse.com/drag-and-drop-in-vanilla-javascript/
let dragging = null;

  function dragStart() {
    dragging = this;
    setTimeout(()=> this.classList.add('invisible'), 0);
}


function dragEnd() {
    dragging = null;
    setTimeout(()=> this.classList.remove('invisible'), 0);
}


function dragEnter() {
    if(dragging){
        dragging.parentNode.insertBefore(dragging, this.nextElementSibling);
    }
    // document.getElementById('0').parentNode.insertBefore(document.getElementById('0'), document.getElementById('3'));
}


function dragLeave() {
    console.log('drag leave', this);
}