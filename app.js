const form = document.querySelector('#formulairenew');
const cardSection = document.querySelector('#cartes');
const titre = document.querySelector("h1");
const theme = document.querySelectorAll('.theme')
const cartes = document.querySelectorAll('.carte');

theme.forEach(item => {
    item.addEventListener('click', e => {
        switch (e.target.id) {
            case "black":
                document.body.classList.add("black");
                document.body.classList.remove("salmon");
                cartes.forEach(carte => {
                    carte.classList.add("black");
                    carte.classList.remove("salmon");
                });
                break;

            case "salmon":
                document.body.classList.remove("black");
                document.body.classList.add("salmon");
                cartes.forEach(carte => {
                    carte.classList.remove("black");
                    carte.classList.add("salmon");
                });
                break;
        }
    });
});

window.addEventListener("load", ()=>{
    titre.classList.add("fade-in");
});


form.addEventListener('submit', e =>{
    e.preventDefault();
    console.log(e, e.target['lien-projet'].value);
    cardSection.insertAdjacentHTML("beforeend",`<div class="carte">
                <h3 class="carte__titre">${e.target['titre-projet'].value}</h3>
                <img class="carte__image" src="${e.target['lien-projet'].value}" />
                <p class="carte__texte">${e.target['text-projet'].value}</p>
            </div>`)
});