function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

let completo = nomeCompleto("José", "Guilheme");
console.log("completo:" + " " + completo);

// Entrada -> Processamento -> Saída.

function maiorDeIdade(idade) {
  if (idade >= 18) {
    return true;
  } else {
    return false;
  }
}
let idade = 20;
let verificacao = maiorDeIdade(idade);
if (verificacao) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}
