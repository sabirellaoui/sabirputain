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