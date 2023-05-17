const body = document.querySelector('body');
const form = document.querySelector('#formulairenew');
const cardSection = document.querySelector('#cartes');
const titre = document.querySelector("h1");
const theme = document.querySelectorAll('.theme');
// themed class on all element that follow the theme
const themed = document.querySelectorAll('.themed');
const cartes = document.querySelectorAll('.carte');


// default card been put here
const defaultCards = [
    {
title:'mon premier projet HP',
link:'images/thumb2-hp-red-logo-4k-red-brickwall-hewlett-packard-hp-logo.jpg',
text:'premier projet js avec HP'
    },{
title:'mon premier projet playstation',
link:'images/thumb-playstation-red-logo-4k-red-brickwall-playstation-logo-brands.jpg',
text:'premier projet js avec playstation'
    },{
title:'mon premier projet nasa',
link:'images/thumb2-nasa-violet-logo-4k-violet-brickwall-nasa-logo-fashion-brands.jpg',
text:'premier projet js avec nasa'
    },{
title:'mon premier projet audi',
link:'images/OIP.jpg',
text:'premier projet js avec audi'
    },{
title:'mon premier projet amazon',
link:'images/illustration-amazon-logo-flat-design-simple-illustration-amazon-logo-flat-design-shadow-isolated-white-130102505.jpg',
text:'premier projet js avec amazon'
    }];

// fais apparaitre les default cards 1 après l'autre
let cardFadeIn = 0;
const interval = setInterval(function(){
    cardCreator(defaultCards[cardFadeIn].title,defaultCards[cardFadeIn].link,defaultCards[cardFadeIn].text);
    cardFadeIn++;

    // quand on a fait toutes les default cards on arrete l'interval
    if(cardFadeIn == defaultCards.length){
        clearInterval(interval);
    }

// durée avant que l'interval se repete (en ms)
},400);



theme.forEach(item => {
    item.addEventListener('click', e => {
        switch (e.target.id) {
            case "black":
                themed.forEach(carte => {
                    carte.classList.add("black");
                    carte.classList.remove("salmon");
                });
                break;

            case "salmon":
                themed.forEach(carte => {
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
    cardCreator(e.target['titre-projet'].value,e.target['lien-projet'].value,e.target['text-projet'].value);

    //empty form fields
    e.target['titre-projet'].value = e.target['lien-projet'].value = e.target['text-projet'].value = '';
});

// returns a card html code => one place to change all cards
// modifié => ajoute la carte, il suffit d'appeler la fonction
function cardCreator(title, link, text) {
    const el = cardSection.childElementCount;
    cardSection.insertAdjacentHTML("beforeend", `
    <div class="carte themed">
        <h3 class="carte__titre center">${title}</h3>
        <img class="carte__image" src="${link}" />
        <p class="carte__texte center">${text}</p>
        <i class="fa-solid fa-trash-can"></i>
    </div>`);

    //fais apparaitre la carte avec transition
    //la fonction s'execute immédiatement (argument 0 apres la fonction défini la durée avant l'execution de la fonction)
    //sans le setTimeout le systeme va trop vite pour la transition et donc la carte apparait direct
    setTimeout(()=>{
        // cardSection.lastElementChild.classList.add('fade');
        cardSection.children[el].classList.add('fade');
    },0);
};
function deleteCard(event) {
    // si on tombe sur l element card (donc une carte)
    // modifié => si on clique sur la poubelle
    if (event.target.classList.contains('fa-trash-can')) {
        // closest permet de choisir la carte qu on a cliqué la famille
        // déplacé dans le if comme ca, si c'est pas le cas ca fait une opération de moins
        const card = event.target.closest('.carte');
      // Supprimer la carte
      card.remove();
    }
  }
  
  // se declenche lorsqu'on clique dessus
  // modifié => uniquement sur la section cartes
  cardSection.addEventListener('click', deleteCard);