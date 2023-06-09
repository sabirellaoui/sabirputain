

 
 const cercle = document.querySelector('.cercle')
 const body = document.querySelector('.body')

 let clickCount = 0;

cercle.addEventListener('click', e => {
  clickCount++;

  if (clickCount === 1) {
    body.classList.add("blackk");
    console.log("test1");
  } else if (clickCount === 2) {
    body.classList.remove("blackk");
    body.classList.add("salmonn");
    console.log("test2");
  } else if (clickCount === 3) {
    body.classList.remove("salmonn");
    body.classList.add("blue");
    console.log("test3");

  } else if (clickCount === 4) {
    body.classList.remove("blue");
    body.classList.add("blackk");
    console.log("test4");
    clickCount = 1;
   


  }
});