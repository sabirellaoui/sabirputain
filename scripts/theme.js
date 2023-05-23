theme.forEach(item => {
    item.addEventListener('click', e => {

        switch (e.target.id) {
            case "black":
                themed.forEach(carte => {
                    carte.classList.remove("salmon");
                    carte.classList.add("black");
                    
                    forme.classList.remove("salmon");
                    forme.classList.add("black");
                    
                    titref.style.color = "white";
                    
                });
                break;

            case "salmon":
                themed.forEach(carte => {
                    carte.classList.remove("black");
                    carte.classList.add("salmon");
                    forme.classList.remove("black");
                    forme.classList.add("salmon");
                    titref.style.color = "black";
                  
                });
                break;
        }
    });
});

window.addEventListener("load", ()=>{
    setTimeout(()=>{
    titre.classList.remove("faded");
    },0)
});