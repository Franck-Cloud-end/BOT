const readline = require("readline");

// Import des fichiers produits et services
const iphone = require("./commands/iphone");
const samsung = require("./commands/samsung");
const ipad = require("./commands/ipad");
const contact = require("./commands/contact");
const infos = require("./commands/infos");
const rdvCmd = require("./commands/rdv");

// Variables globales
let etat = "accueil";
let sousMenuMarque = null;
let rdv = { nom: "", email: "", date: "", heure: "" };

// Interface console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("🤖 Bot TechStore Togo (MODE TEST CONSOLE)");
console.log("Tapez 'exit' pour quitter\n");

// --------- Fonctions utilitaires ---------

function afficherMenuPrincipal() {
  console.log(`
Veuillez choisir une option :  
1️⃣ Nos marques  
2️⃣ Contact  
3️⃣ Infos  
4️⃣ Prendre rendez-vous
`);
  etat = "menu";
}

function afficherMarques() {
  console.log(`
📌 Nos marques disponibles :

1️⃣ iPhone  
2️⃣ Samsung  
3️⃣ iPad  
0️⃣ Retour au menu principal
`);
  etat = "sousMenuMarque";
}

function afficherModeles(marque) {
  let liste = [];
  if (marque === "iphone") liste = iphone.produits;
  if (marque === "samsung") liste = samsung.produits;
  if (marque === "ipad") liste = ipad.produits;

  console.log(
    `\n📱 ${marque.charAt(0).toUpperCase() + marque.slice(1)} disponibles :`
  );
  liste.forEach((p, i) => {
    console.log(
      `${i + 1}. ${p.nom} - ${p.prix.toLocaleString()} FCFA\n   📌 ${p.desc}`
    );
  });
  console.log("\n0️⃣ Retour au menu principal\n1️⃣ Commander un modèle");
  etat = "choixModele";
}

// --------- Gestion des entrées ---------

rl.on("line", async (input) => {
  input = input.trim();
  if (input.toLowerCase() === "exit") {
    console.log("👋 Bot arrêté.");
    process.exit(0);
  }

  // Accueil automatique
  const salutations = [
    "bonjour",
    "bonsoir",
    "salut",
    "coucou",
    "bjr",
    "bsr",
    "slt",
    "cc",
    "hey",
    "hello",
  ];
  if (etat === "accueil" && salutations.includes(input.toLowerCase())) {
    console.log(`
👋 Bienvenue chez TECHSTORE TOGO !

Nous sommes spécialisés dans la vente de smartphones et tablettes au Togo.  
Notre mission : offrir des produits de qualité à des prix accessibles.  
Objectif : satisfaire chaque client avec un service rapide et fiable.  
Historique : actif depuis 2015, avec plusieurs agences à Lomé.
`);
    afficherMenuPrincipal();
    return;
  }

  // --------- MENU PRINCIPAL ---------
  if (etat === "menu") {
    switch (input) {
      case "1":
        afficherMarques();
        return;
      case "2":
        await contact.execute({
          client: { sendMessage: (to, { text }) => console.log(text) },
          message: {},
        });
        afficherMenuPrincipal();
        return;
      case "3":
        await infos.execute({
          client: { sendMessage: (to, { text }) => console.log(text) },
          message: {},
        });
        afficherMenuPrincipal();
        return;
      case "4":
        console.log(`
Afin de traiter au mieux votre demande, merci de communiquer :
▶️ Votre nom complet
`);
        etat = "rdvNom";
        return;
      case "0":
        afficherMenuPrincipal();
        return;
      default:
        console.log("Veuillez choisir une option valide");
        return;
    }
  }

  // --------- SOUS-MENU MARQUES ---------
  if (etat === "sousMenuMarque") {
    switch (input) {
      case "1":
        sousMenuMarque = "iphone";
        afficherModeles("iphone");
        return;
      case "2":
        sousMenuMarque = "samsung";
        afficherModeles("samsung");
        return;
      case "3":
        sousMenuMarque = "ipad";
        afficherModeles("ipad");
        return;
      case "0":
        afficherMenuPrincipal();
        return;
      default:
        console.log("Veuillez choisir une option valide");
        return;
    }
  }

  // --------- CHOIX MODELE ---------
  if (etat === "choixModele") {
    switch (input) {
      case "1":
        console.log(
          "Veuillez entrer le numéro du modèle que vous souhaitez commander :"
        );
        etat = "commandeModele";
        return;
      case "0":
        afficherMenuPrincipal();
        return;
      default:
        console.log(
          "Veuillez choisir 1 pour commander ou 0 pour revenir au menu principal"
        );
        return;
    }
  }

  // --------- COMMANDE MODELE ---------
  if (etat === "commandeModele") {
    const index = parseInt(input) - 1;
    const produitsMap = {
      iphone: iphone.produits,
      samsung: samsung.produits,
      ipad: ipad.produits,
    };
    const liste = produitsMap[sousMenuMarque];
    if (!liste || index < 0 || index >= liste.length) {
      console.log(
        "Numéro invalide, veuillez réessayer ou tapez 0 pour revenir au menu principal"
      );
      return;
    }
    const modeleChoisi = liste[index].nom;
    console.log(`✅ Commande reçue pour ${modeleChoisi}`);
    console.log(
      "📞 Un vendeur vous contactera bientôt pour finaliser votre commande.\n"
    );
    afficherMenuPrincipal();
    return;
  }

  // --------- RDV ---------
  if (etat === "rdvNom") {
    rdv.nom = input;
    console.log("▶️ Votre adresse email");
    etat = "rdvEmail";
    return;
  }
  if (etat === "rdvEmail") {
    rdv.email = input;
    console.log("▶️ La date souhaitée pour le rendez-vous (ex: 2026-01-05)");
    etat = "rdvDate";
    return;
  }
  if (etat === "rdvDate") {
    rdv.date = input;
    console.log("▶️ L'heure souhaitée pour le rendez-vous (ex: 14:30)");
    etat = "rdvHeure";
    return;
  }
  if (etat === "rdvHeure") {
    rdv.heure = input;
    console.log(`✅ Votre demande de rendez-vous est enregistrée :
Nom : ${rdv.nom}
Email : ${rdv.email}
Date : ${rdv.date}
Heure : ${rdv.heure}
`);
    afficherMenuPrincipal();
    return;
  }

  console.log(
    "Je n'ai pas compris, tapez 'exit' pour quitter ou 0 pour revenir au menu principal."
  );
});
