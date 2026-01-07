module.exports = {
  name: "contact",
  command: ["contact"],
  async execute({ client, message }) {
    const text = `
👤 Assistance humaine - TECHSTORE TOGO

📞 Téléphone : +228 90 12 34 56  
🌐 WhatsApp : +228 90 12 34 56  
📧 Email : contact@techstore.tg  

🕗 Heures d'ouverture :  
Lundi - Samedi : 08h00 - 19h00  
Dimanche : 10h00 - 16h00

0️⃣ Retour au menu principal
`;
    await client.sendMessage(message.from, { text });
  }
};
