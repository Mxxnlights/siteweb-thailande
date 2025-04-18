window.onload = function() {
    const popup = document.getElementById('cookie-consent-popup');
    const acceptButton = document.getElementById('accept-cookies');

    // Vérifier si l'utilisateur a déjà accepté les cookies
    if (!localStorage.getItem('cookies-accepted')) {
        popup.style.display = 'block';  // Afficher le pop-up si non accepté
    } else {
        popup.style.display = 'none';  // Masquer le pop-up si accepté
    }

    // Ajouter un événement de clic pour accepter les cookies
    acceptButton.addEventListener('click', function() {
        localStorage.setItem('cookies-accepted', 'true');
        popup.style.display = 'none';  // Masquer le pop-up après acceptation
    });

};