const produits = [
  { nom: "iPhone 11", prix: 500000, desc: "Écran Liquid Retina, bonne autonomie, caméra correcte" },
  { nom: "iPhone 11 Pro", prix: 650000, desc: "Écran OLED, triple caméra, design premium" },
  { nom: "iPhone 11 Pro Max", prix: 700000, desc: "Grand écran, meilleure autonomie, Face ID" },
  { nom: "iPhone 12", prix: 550000, desc: "Petit format, performance correcte, caméra standard" },
  { nom: "iPhone 12 Mini", prix: 500000, desc: "Format compact, idéal pour une main, autonomie correcte" },
  { nom: "iPhone 12 Pro", prix: 650000, desc: "Caméra améliorée, design premium, Face ID" },
  { nom: "iPhone 13", prix: 600000, desc: "Meilleure autonomie, écran plus lumineux" },
  { nom: "iPhone 13 Pro", prix: 700000, desc: "Caméra Pro, design élégant, Face ID" },
  { nom: "iPhone 13 Pro Max", prix: 750000, desc: "Grand écran, autonomie longue, caméra avancée" },
  { nom: "iPhone 14", prix: 700000, desc: "Dernier modèle, caméra avancée, écran OLED" },
  { nom: "iPhone 14 Plus", prix: 750000, desc: "Écran large, batterie longue durée, Face ID" },
  { nom: "iPhone 14 Pro", prix: 800000, desc: "Caméra Pro, écran OLED, design élégant" }
];

module.exports = {
  name: "iphone",
  produits,
  command: ["iphone"],
  async execute({ client, message }) {
    let text = "🍏 iPhone disponibles :\n";
    produits.forEach((p, i) => {
      text += `${i+1}. ${p.nom} - ${p.prix.toLocaleString()} FCFA\n   📌 ${p.desc}\n`;
    });
    await client.sendMessage(message.from, { text });
  }
};
