//OBJET PERSONNE AVEC PROPRIETÉS ET METHODES:

let personne = {
    nom: "Saliou",
    lieu: "bruxelles",
    argent: 300,
    mainDroite: [],
    mainGauche: [],
    seDeplacer(lieu) {
        this.lieu = lieu.nom
        lieu.personnes = this.nom
    },
    payerArticle(article) {
        this.argent -= article.prix
    },
    couper(ingredient, outil) {
        ingredient.etat = outil.action
    }
}

//MAISON (OBJET) ET PROPRIETÉS:
let maison = {
    nom: "maison",
    personnes: [],

}

//OUTIL POUR DECOUPER LES INGREDIENTS:
let couteau = {
    nom: "couteau",
    action: "coupé"
}

// PRODUITS (INGREDIENTS) A METTRE DANS LE MAGASIN POUR L'OMELETTE:
class Ingredients {
    constructor(nom, etat, prix) {
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
    }
}
let oignon = new Ingredients("oignon", "entier", 2);
let oeuf = new Ingredients("oeuf", "entier", 4);
let epice = new Ingredients("epice", "moulu", 3.25);
let fromage = new Ingredients("fromage", "coupé", 1.6);
let paprika = new Ingredients("paprika", "moulu", 1.5);
let poivron = new Ingredients("poivron", "entier", 1);

// EPICERIES & LISTE DES INGREDIENTS
let epicerie = {
    nom: "epicerie",
    personnes: [],
    paniers: [panier1={
        type: "panier",
        contenu: []
    }, panier2={
        type: "panier",
        contenu: []
    }, panier3={
        type: "panier",
        contenu: []
    }
    ]
}
epicerie.ingredients = [oignon, oeuf, epice, paprika, fromage, poivron];

// POELE ET SON CONTENU
let poele = {
    contenu: [],
    cuire() {
        setTimeout(() => {
            this.contenu[0].etat = "cuite"
            console.log(`L'omelette est ${this.contenu[0].etat} !`);
        }, 4000);
    }
}

// LE BOL
let bol = {
    contenu: [],
    melanger(nomMelange) {
        let newMelange = {
            nom: nomMelange,
            etat: "pas cuit",
        }
        this.contenu.push(newMelange)
        this.contenu.splice(0, 6)
        console.log(`${nomMelange} est melangé !`);
    }
}
// OMELETTE EN QUESTION 
personne.seDeplacer(maison)
//MESSAGE 
console.log(`${personne.nom} est actuellement à la ${personne.lieu}`);
// A L'EPICERIE POUR LES INGREDIENTS POUR L'OMELETTE
personne.seDeplacer(epicerie)
console.log(`${personne.nom} est actuellement à l'${personne.lieu}`);
// PERSONNAGE PREND AVEC LA MAIN DROITE 
personne.mainDroite.push(epicerie.paniers.pop())
console.log(personne);
console.log(epicerie);
console.log(`Contenu de l'épicerie : ${epicerie.paniers} (paniers)`);

// OBJET DANS LA MAIN D. ET PANIER EN MOINS 
// console.log(`${personnage.nom} a pris un ${personnage.mainDroite.type}`);
console.log(`${personne.nom} a pris un ${personne.mainDroite[0].type}`)
console.log(personne.mainDroite[0]);

// BOUCLE QUI PREND INGREDIENT ET EN FAIRE COPIE 
for (let i = 0; i < epicerie.ingredients.length; i++) {
    personne.mainDroite[0].contenu.push(epicerie.ingredients[i]);
}
console.log(personne.mainDroite[0]);
console.log(`Voici le contenu de mon panier : ${personne.mainDroite[0].contenu}`);

// PAYER INGREDIENT DANS LE PANIER AVEC BOUCLE DANS FONCTION payerArticle()
for (let i = 0; i < personne.mainDroite[0].contenu.length; i++) {
    personne.payerArticle(epicerie.ingredients[i])
}

// RESTE DE LA L'ARGENT 
console.log(`Il me reste ${personne.argent} €`);


