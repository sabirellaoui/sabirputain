
const pauvres1 = document.querySelector('.pauvres1');
const fric1 = document.querySelector('.fric1');
const argent1 = document.querySelector('.argent1');
const argent2 = document.querySelector('.argent2');


fric1.addEventListener('click', () => {
    console.log('clicked');
    let audio = document.querySelector(".mp3-fric1");
        audio.play();
});
pauvres1.addEventListener('click', () => {
    console.log('clicked');
    let audio = document.querySelector(".mp3-pauvres1");
        audio.play();
});
argent1.addEventListener('click', () => {
    console.log('clicked');
    let audio = document.querySelector(".mp3-argent1");
        audio.play();
});
argent2.addEventListener('click', () => {
    console.log('clicked');
    let audio = document.querySelector(".mp3-argent2");
        audio.play();
});