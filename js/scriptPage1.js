var btnConnexion = document.getElementById("btn-connexion");
var btnDeconnexion = document.getElementById("btn-deconnexion");
var connexionForm = document.getElementById("connexion-form");
var loginForm = document.getElementById("login-form");

btnConnexion.addEventListener("click", function() {
    connexionForm.style.display = "flex";
});

btnDeconnexion.addEventListener("click", function() {
    // Code pour gérer la déconnexion ici (par exemple, effacer les cookies ou déconnecter l'utilisateur côté serveur).
    
    // Une fois déconnecté, masquer le bouton de déconnexion et afficher le bouton de connexion.
    btnDeconnexion.style.display = "none";
    btnConnexion.style.display = "inline-block";
});

loginForm.addEventListener("submit", function(event) {
    // Code pour gérer la soumission du formulaire de connexion ici.
    // Vous pouvez vérifier les informations de connexion côté client et, en cas de succès, afficher le bouton de déconnexion et masquer le bouton de connexion.

    // Exemple de code pour simuler une connexion réussie (à remplacer par votre propre logique) :
    event.preventDefault(); // Empêche le formulaire de se soumettre.

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Vérifiez les informations de connexion ici.
    if (username === "votreNomUtilisateur" && password === "votreMotDePasse") {
        // Connexion réussie, masquer le formulaire de connexion.
        connexionForm.style.display = "none";

        // Afficher le bouton de déconnexion.
        btnDeconnexion.style.display = "inline-block";
    } else {
        // Affichez un message d'erreur si la connexion échoue.
        alert("Nom d'utilisateur ou mot de passe incorrect.");
    }
});


// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
    }
    
    
    // Toggle between showing and hiding the sidebar when clicking the menu icon
    var mySidebar = document.getElementById("mySidebar");
    
    function w3_open() {
        if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
        } else {
        mySidebar.style.display = 'block';
        }
    }
    
    // Close the sidebar with the close button
    function w3_close() {
        mySidebar.style.display = "none";
    }


