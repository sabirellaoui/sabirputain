var theme = document.querySelectorAll('.theme')
const cartes = document.querySelectorAll('.carte');
theme.forEach(item => {
    item.addEventListener('click', () => {
        document.body.classList.remove("black");
        document.body.classList.remove("salmon");
        cartes.forEach(carte => {
            carte.classList.remove("salmon");
            carte.classList.remove("black");
        });

        switch (event.target.id) {
            case "black":
                document.body.classList.add("black");
                cartes.forEach(carte => {
                    carte.classList.add("salmon");

                });
                break;

            case "salmon":
                document.body.classList.add("salmon");
                cartes.forEach(carte => {
                    carte.classList.add("black");

                });
                break;
        }
    });
});
/****************************************************************************** */
//*const formulairenew = document.querySelector(".formulairenew")



//formulairenew.addEventListener('submit', (event) => {
  //  event.preventDefault();  // empêche la soumission du formulaire
  //  var inputtxt = document.getElementById("titre-projet").value
  //  var inputlien = document.getElementById("lien-projet").value
  //  console.log(inputtxt);
  //  console.log(inputlien);

   // if (event) {
    //    document.body.classList.add(".carte")
  //  }


 // }); 

