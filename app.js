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

let cards = [];

// si il y a 'cards' en mémoire et que 'cards' n'est pas vide
// donc, si on supprime toutes les cartes => retour de la liste par defaut
if(localStorage.getItem('cards') && localStorage.getItem('cards') != '[]'){
    // prends les cards sauvegardée dans la mémoire
    cards = JSON.parse(localStorage.getItem('cards'));
}else{
    //prends les cards par défaut
    cards = defaultCards;
}

//3eme methode de declaration de fonction => la position importe 
//methode d'objet
// const obj = {
//     bonjour(){
//         console.log('bonjour');
//     }
// }
// obj.bonjour();

// fais apparaitre les default cards 1 après l'autre
let cardFadeIn = 0;

//1ere methode de declarer une fonction => la position a de l'importance (dabord declarer puis appelée)
//expression de fonction
const interval = setInterval(function(){
    cardCreator(cards[cardFadeIn].title,cards[cardFadeIn].link,cards[cardFadeIn].text);
    cardFadeIn++;

    // cards.push({title:cards[cardFadeIn].title,link:cards[cardFadeIn].link,text:cards[cardFadeIn].text});

    // localStorage.setItem('cards', JSON.stringify(cards));

    // quand on a fait toutes les default cards on arrete l'interval
    if(cardFadeIn == cards.length){
        clearInterval(interval);
        //une fois tout affiché, on sauve la liste
        saveList();
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

    
    //if la valeur du champs titre , lien et texte n'est pas vide
    if (e.target['titre-projet'].value != "" && e.target['lien-projet'].value != "" && e.target["text-projet"].value != "") { 
        // creates a new card each time we click on submit
        cardCreator(e.target['titre-projet'].value,e.target['lien-projet'].value,e.target['text-projet'].value);


        //empty form fields
        e.target['titre-projet'].value = e.target['lien-projet'].value = e.target['text-projet'].value = ''; 
            
    };
});

// returns a card html code => one place to change all cards
// modifié => ajoute la carte, il suffit d'appeler la fonction
//2eme methode de declaration de fonction => la position n'importe pas
//déclaration de fonction
function cardCreator(title, link, text) {
    const el = cardSection.childElementCount;
    cardSection.insertAdjacentHTML("beforeend", `
    <div class="carte themed" id="${el}">
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
      // sauve la liste
      saveList()
    }
  }
  // se declenche lorsqu'on clique dessus
  // modifié => uniquement sur la section cartes
  cardSection.addEventListener('click', deleteCard);

  function saveList(){
    //on crée un array temporaire
    let list = [];

    //on pousse toutes les cards dans l'array temporaire sous forme d'objet
    for(let i =0; i < cardSection.childElementCount; i++){
        list.push({ //document.querySelector('#cartes')
        title: cardSection.children[i].querySelector('.carte__titre').innerText,
        link: cardSection.children[i].querySelector('.carte__image').getAttribute('src'),
        text: cardSection.children[i].querySelector('.carte__texte').innerText
        });
    }

    //on sauve la liste dans la mémoire
    localStorage.setItem('cards', JSON.stringify(list));
  };