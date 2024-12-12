// Fonction pour gérer le changement d'onglet
document.querySelectorAll('.menu-deroulant a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        // Masquer tous les onglets
        document.querySelectorAll('.onglet').forEach(section => {
            section.style.display = 'none';
        });

        // Afficher l'onglet correspondant
        const targetId = this.getAttribute('href').substring(1); // Récupérer l'ID de l'onglet
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.style.display = 'block';
        }

          // Gérer l'activation du titre sous la bannière
          document.querySelectorAll('.titre-sous-banniere').forEach(titre => {
            titre.classList.remove('active'); // Retirer la classe active de tous les titres sous la bannière
        });

        // Ajouter la classe active au titre sous la bannière de l'onglet actuel
        const titreSousBanniere = document.getElementById(targetId + '-sous-titre');
        if (titreSousBanniere) {
            titreSousBanniere.classList.add('active'); // Ajouter la classe active
        }
        
        document.addEventListener('DOMContentLoaded', function () {
            const banniere = document.querySelector('.banniere');
            const titreSousBanniere = document.querySelectorAll('.titre-sous-banniere');
        
            // Ajuster la marge du titre sous la bannière
            titreSousBanniere.forEach(titre => {
                const banniereHeight = banniere.offsetHeight;
                titre.style.marginTop = `${banniereHeight + 20}px`; // Laisser un peu d'espace entre la bannière et le titre
            });
        });

        // Changer la bannière
        const bannerSrc = this.getAttribute('data-banner');
        if (bannerSrc) {
            document.querySelector('.banniere img').src = bannerSrc;
        }

        // Gérer le texte visible uniquement au chargement initial
        const texteAccueil = document.getElementById('texte-accueil'); // Assurez-vous que cet ID est présent dans votre HTML
        if (texteAccueil) {
            texteAccueil.style.display = targetId === 'accueil' ? 'block' : 'none';
        }
    });
});

// Afficher uniquement le texte de la page d'accueil au chargement initial
document.addEventListener('DOMContentLoaded', () => {
    const texteAccueil = document.getElementById('texte-accueil');
    if (texteAccueil) {
        texteAccueil.style.display = 'block'; // Affiche le texte uniquement au chargement initial
    }
});

// Sélectionner tous les objets
const objets = document.querySelectorAll('.objet');

objets.forEach(objet => {
    objet.addEventListener('click', () => {
        const description = objet.querySelector('.description');

        // Si la description est masquée, on l'affiche, sinon on la cache
        if (description.style.display === 'none' || description.style.display === '') {
            description.style.display = 'block'; // Afficher la description
        } else {
            description.style.display = 'none'; // Cacher la description
        }
    });
});
