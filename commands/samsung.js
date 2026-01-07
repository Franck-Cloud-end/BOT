const produits = [
  { nom: "Galaxy S20", prix: 500000, desc: "Écran AMOLED, caméra correcte, performance stable" },
  { nom: "Galaxy S20+", prix: 550000, desc: "Écran plus grand, meilleure autonomie" },
  { nom: "Galaxy S20 Ultra", prix: 650000, desc: "Caméra pro, zoom puissant, écran large" },
  { nom: "Galaxy S21", prix: 600000, desc: "Design moderne, performances solides" },
  { nom: "Galaxy S21+", prix: 650000, desc: "Écran large, autonomie améliorée" },
  { nom: "Galaxy S21 Ultra", prix: 750000, desc: "Caméra Ultra, S-Pen compatible, batterie longue durée" },
  { nom: "Galaxy S22", prix: 700000, desc: "Design raffiné, écran AMOLED, caméra performante" },
  { nom: "Galaxy S22+", prix: 750000, desc: "Écran grand, meilleure autonomie, caméra avancée" },
  { nom: "Galaxy S22 Ultra", prix: 800000, desc: "Caméra Pro, S-Pen intégré, batterie longue durée" },
  { nom: "Galaxy Note 20", prix: 650000, desc: "S-Pen intégré, écran large, productivité" },
  { nom: "Galaxy Note 20 Ultra", prix: 750000, desc: "Écran géant, caméra avancée, S-Pen Pro" },
  { nom: "Galaxy Z Fold 3", prix: 900000, desc: "Écran pliable, multitâche, technologie avancée" }
];

module.exports = {
  name: "samsung",
  produits,
  command: ["samsung"],
  async execute({ client, message }) {
    let text = "📱 Samsung disponibles :\n";
    produits.forEach((p, i) => {
      text += `${i+1}. ${p.nom} - ${p.prix.toLocaleString()} FCFA\n   📌 ${p.desc}\n`;
    });
    await client.sendMessage(message.from, { text });
  }
};
