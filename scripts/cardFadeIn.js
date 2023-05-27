
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

cardsFadeIn(cards);
function cardsFadeIn(cards){

    // fais apparaitre les default cards 1 après l'autre
    let cardFadeIn = 0;
    
    //1ere methode de declarer une fonction => la position a de l'importance (dabord declarer puis appelée)
    //expression de fonction
    const interval = setInterval(function(){
        cardCreator(cards[cardFadeIn].title,cards[cardFadeIn].link,cards[cardFadeIn].text);
        cardFadeIn++;
    
        // quand on a fait toutes les default cards on arrete l'interval
        if(cardFadeIn == cards.length){
            clearInterval(interval);
            //une fois tout affiché, on sauve la liste
            saveList();
        }
    
    // durée avant que l'interval se repete (en ms)
    },400);
}