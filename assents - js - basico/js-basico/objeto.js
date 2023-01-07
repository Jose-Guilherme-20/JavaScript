// Objeto Javascript

let personagem = {
  nome: "José",
  idade: 21,
  pais: "Brasil",
  olhos: ["azul", "preto"],
  caracteristicas: {
    forca: 99,
    magia: 99,
    stamina: 99,
  },
};

console.log(`${personagem.nome} tem ${personagem.idade} anos!`);
console.log(personagem.caracteristicas.magia);
console.log(personagem.olhos[0]);

let person = {
  nome: "José",
  idade: 21,
  carros: [
    { modelo: "Fusion", cor: "preto" },
    { modelo: "Civic", cor: "prata" },
  ],
};
console.log(person.nome);
console.log(person.carros[0].modelo);
console.log(person.carros[1].modelo);
