// returns a card html code => one place to change all cards
// modifié => ajoute la carte, il suffit d'appeler la fonction
//2eme methode de declaration de fonction => la position n'importe pas
//déclaration de fonction
function cardCreator(title, link, text) {
    const el = cardSection.childElementCount;
    cardSection.insertAdjacentHTML("beforeend", `
    <div class="carte themed faded" draggable='true' id="${el}">
        <h3 class="carte__titre center">${title}</h3>
        <img class="carte__image" src="${link}" />
        <p class="carte__texte center">${text}</p>
        <i class="fa-solid fa-trash-can"></i>
    </div>`);

    const card = document.querySelector('.cartes').lastElementChild;
    card.addEventListener('dragstart', dragStart);
    card.addEventListener('dragend', dragEnd);
    card.addEventListener('dragenter', dragEnter);
    card.addEventListener('dragleave', dragLeave);

    //fais apparaitre la carte avec transition
    //la fonction s'execute immédiatement (argument 0 apres la fonction défini la durée avant l'execution de la fonction)
    //sans le setTimeout le systeme va trop vite pour la transition et donc la carte apparait direct
    setTimeout(()=>{
        cardSection.children[el].classList.remove('faded');
    },10);
    saveList();
};