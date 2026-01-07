const produits = [
  { nom: "iPad 8", prix: 400000, desc: "Écran 10.2\", performant, bon rapport qualité/prix" },
  { nom: "iPad 9", prix: 450000, desc: "Autonomie longue, écran lumineux, léger" },
  { nom: "iPad 10", prix: 500000, desc: "Dernier modèle, design moderne" },
  { nom: "iPad Mini 5", prix: 420000, desc: "Petit format, parfait pour mobilité" },
  { nom: "iPad Mini 6", prix: 470000, desc: "Plus rapide, écran amélioré" },
  { nom: "iPad Air 3", prix: 500000, desc: "Puissant, design fin, écran Retina" },
  { nom: "iPad Air 4", prix: 550000, desc: "Écran Liquid Retina, plus rapide, design fin" },
  { nom: "iPad Air 5", prix: 600000, desc: "Puissant, écran lumineux, design moderne" },
  { nom: "iPad Pro 11", prix: 750000, desc: "Écran ProMotion 120Hz, caméra performante" },
  { nom: "iPad Pro 12.9", prix: 900000, desc: "Écran géant, productivité maximale" },
  { nom: "iPad 7", prix: 380000, desc: "Écran 10.2\", économique, performant" },
  { nom: "iPad 6", prix: 350000, desc: "Écran Retina, bonne autonomie, petit prix" }
];

module.exports = {
  name: "ipad",
  produits,
  command: ["ipad"],
  async execute({ client, message }) {
    let text = "📱 iPad disponibles :\n";
    produits.forEach((p, i) => {
      text += `${i+1}. ${p.nom} - ${p.prix.toLocaleString()} FCFA\n   📌 ${p.desc}\n`;
    });
    await client.sendMessage(message.from, { text });
  }
};
