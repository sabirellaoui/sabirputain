
// const pauvres1 = document.querySelector('.pauvres1');
// const fric1 = document.querySelector('.fric1');
// const argent1 = document.querySelector('.argent1');
// const argent2 = document.querySelector('.argent2');
const form = document.querySelector('#formulairenew');
const cardSection = document.querySelector('#cartes');

let newCards = [];


form.addEventListener('submit', e =>{
    e.preventDefault();
    console.log(e, e.target['lien-projet'].value);
    cardSection.insertAdjacentHTML("beforeend",`<div class="carte">
                <h3 class="carte__titre">${e.target['titre-projet'].value}</h3>
                <img class="carte__image" src="${e.target['lien-projet'].value}" />
                <p class="carte__texte">${e.target['text-projet'].value}</p>
            </div>`)
});


// fric1.addEventListener('click', () => {
//     console.log('clicked');
//     let audio = document.querySelector(".mp3-fric1");
//         audio.play();
// });
// pauvres1.addEventListener('click', () => {
//     console.log('clicked');
//     let audio = document.querySelector(".mp3-pauvres1");
//         audio.play();
// });
// argent1.addEventListener('click', () => {
//     console.log('clicked');
//     let audio = document.querySelector(".mp3-argent1");
//         audio.play();
// });
// argent2.addEventListener('click', () => {
//     console.log('clicked');
//     let audio = document.querySelector(".mp3-argent2");
//         audio.play();
// });







