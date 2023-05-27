const body = document.querySelector('body');
const form = document.querySelector('#formulairenew');
const cardSection = document.querySelector('#cartes');
const titre = document.querySelector(".projet__titre");
const theme = document.querySelectorAll('.theme');
// themed class on all element that follow the theme
const themed = document.querySelectorAll('.themed');
const cartes = document.querySelectorAll('.carte');
//variable formulaire pour que la couleur du form change avec le theme ta3 zobi
const forme = document.querySelector('.formulaire');
const titref = document.querySelector('.formulaire__titre');
const reloadButton = document.querySelector('.fa-rotate-right');


// executes the function when submitting the form
form.addEventListener('submit', e =>{
    // prevents form button from reloading the page
    e.preventDefault();
    const titre = e.target['titre-projet'].value;
    const text = e.target["text-projet"].value;


    //if la valeur du champs titre , lien et texte n'est pas vide
    if (titre != "" && text != "") { 

        let link = e.target['lien-projet'].value;

        if (link){
            link = e.target['lien-projet'].value;
            // creates a new card each time we click on submit
            cardCreator(titre,link,text);
        }else{
            fetch('https://picsum.photos/400/300')
            .then(data=>{
                link = data.url;
                cardCreator(titre,link,text);
            })
            .catch(err => console.log(err));
        }
        //empty form fields
        e.target.reset();
            
    };
});

  // se declenche lorsqu'on clique dessus
  // modifié => uniquement sur la section cartes
cardSection.addEventListener('click', deleteCard);

cardSection.addEventListener('click', playSound);

reloadButton.addEventListener('mouseover', e=>{
    e.target.classList.add('fa-spin');
});
reloadButton.addEventListener('mouseout', e=>{
    e.target.classList.remove('fa-spin');
});
reloadButton.addEventListener('click', resetCards);


// const carte = document.querySelectorAll('.carte');

// cartes.addEventListener("click", () =>{
//     console.log('z');
// } );

// cartes[0].addEventListener('click', e => {
//     console.log('hello');
// });