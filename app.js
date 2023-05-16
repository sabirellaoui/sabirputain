const body = document.querySelector('body');
const form = document.querySelector('#formulairenew');
const cardSection = document.querySelector('#cartes');
const titre = document.querySelector("h1");
const theme = document.querySelectorAll('.theme')
const cartes = document.querySelectorAll('.carte');


theme.forEach(item => {
    item.addEventListener('click', e => {
        switch (e.target.id) {
            case "black":
                body.classList.add("black");
                body.classList.remove("salmon");
                cartes.forEach(carte => {
                    carte.classList.add("black");
                    carte.classList.remove("salmon");
                });
                break;

            case "salmon":
                body.classList.remove("black");
                body.classList.add("salmon");
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


// executes the function when submitting the form
form.addEventListener('submit', e =>{
    // prevents form button from reloading the page
    e.preventDefault();
    
    // creates a new card each time we click on submit
    cardSection.insertAdjacentHTML("beforeend",`<div class="carte">
                <h3 class="carte__titre">${e.target['titre-projet'].value}</h3>
                <img class="carte__image" src="${e.target['lien-projet'].value}" />
                <p class="carte__texte">${e.target['text-projet'].value}</p>
            </div>`)
});