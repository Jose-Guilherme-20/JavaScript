// o que é uma função

function gravidade() {
  console.log("A gravidade do planeta é:");
  console.log(9.8);
}
console.log("opa, tudo bem?");
gravidade();

function somar(n1, n2) {
  let resultado = n1 + n2;
  console.log("resultado:" + " " + resultado);
}
somar(10, 20);

function nomeCompleto(nome, sobrenome) {
  console.log(`${nome} ${sobrenome}`);
}
nomeCompleto("José", "Guilherme");
