module.exports = {
  name: "infos",
  command: ["infos"],
  async execute({ client, message }) {
    const text = `
🏢 TECHSTORE TOGO - Informations

Nous sommes spécialisés dans la vente de smartphones et tablettes au Togo.  
Notre mission : offrir des produits de qualité à des prix accessibles.  
Objectif : satisfaire chaque client avec un service rapide et fiable.  
Historique : actif depuis 2015, avec plusieurs agences à Lomé.

📍 Agences :  
1️⃣ Agence Agoè – Lomé  
2️⃣ Agence Adidogomé – Lomé  

📞 Téléphone : +228 90 12 34 56  
📧 Email : contact@techstore.tg  

🕗 Heures d'ouverture :  
Lundi - Samedi : 08h00 - 19h00  
Dimanche : 10h00 - 16h00

0️⃣ Retour au menu principal
`;
    await client.sendMessage(message.from, { text });
  }
};
