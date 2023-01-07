let pessoa = {
  nome: "José",
  sobrenome: "Guilherme",
  idade: 21,
  nomeCompleto: function () {
    return `${this.nome} ${this.sobrenome}`;
  },
};
console.log(pessoa.nomeCompleto());
