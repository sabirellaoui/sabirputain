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
      saveList();
    }
  }