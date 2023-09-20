document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("reservation-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        // Vous pouvez ajouter ici du code pour traiter la soumission du formulaire, par exemple, l'envoi des données au serveur.
        alert("Formulaire soumis avec succès !");
        form.reset();
    });
});
