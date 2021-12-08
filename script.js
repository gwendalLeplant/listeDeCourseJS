// Classe
class Item {
    constructor(nom) {
        this.nom = nom;
        this.statut = true;
    }
    toggleStatus() {
        if (this.statut) {
            this.statut = false;
        } else {
            this.statut = true;
        }
    }
    setNom(newNom) {
        this.nom = newNom;
    }
}
// Variables
let tabItem = [];
let elementASupprimer;
let elementAModifier;
// Fonctions
function ajouter() {
    // Création d'un objet Item 
    let item = new Item(document.querySelector('#nomItem').value);
    // Ajout de cette objet dans le tableau JS
    tabItem.push(item);
    // Raz des champs de saisie
    document.querySelector('#nomItem').value = '';
    // Clonage d'une ligne depuis le template
    let ligneHTML = document.importNode(document.querySelector('#ligne').content, true);
    // Renseignement des innerHTML
    ligneHTML.querySelector('.td-item').innerHTML = item.nom;
    // Création de la ligne dans le tableau HTML
    document.querySelector('#tableau').appendChild(ligneHTML);
}

function modalSupprimer(e) {
    // Sauvegarde de l'élément
    elementASupprimer = e;
    document.querySelector('#deleteModalLabel').innerHTML = "Supprimer " +
        tabItem[e.parentElement.parentElement.rowIndex - 1].nom + " de la liste ?"
}

function supprimer(e) {
    // Suppression de la ligne dans le tableau JS
    tabItem.splice(e.parentElement.parentElement.rowIndex - 1, 1);
    // Suppression de la ligne HTML
    e.parentElement.parentElement.remove();
}

function modalModifier(e) {
    // Sauvegarde de l'élément
    elementAModifier = e;
}

function modifier(newNom, e) {
    // Modification du nom dans le tableau JS
    tabItem[e.parentElement.parentElement.rowIndex - 1].setNom(newNom);
    // Modification du nom dans le tableau HTML
    e.parentElement.parentElement.querySelector('.td-item').innerHTML = newNom;
}

function inverserStatut(e) {
    // Inversion du statut dans le tableau JS
    tabItem[e.parentElement.parentElement.rowIndex - 1].toggleStatus();
    // Ajout de la class table-danger pour Bootstrap
    e.parentElement.parentElement.classList.toggle("table-danger");
    e.parentElement.parentElement.querySelector('.td-item').classList.toggle("text-decoration-line-through");
}