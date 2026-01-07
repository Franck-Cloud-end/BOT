module.exports = {
  name: "rdv",
  command: ["rdv", "rendezvous"],
  async execute({ client, message }) {
    const text = `
Afin de traiter au mieux votre demande, merci de communiquer :
▶️ Votre nom complet
▶️ Votre adresse email
▶️ La date souhaitée pour le rendez-vous (ex: 2026-01-05)
▶️ L'heure souhaitée pour le rendez-vous (ex: 14:30)

0️⃣ Retour au menu principal
`;
    await client.sendMessage(message.from, { text });
  }
};
