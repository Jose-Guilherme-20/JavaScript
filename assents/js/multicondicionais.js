// &&, ||

let idade = 20;

if (idade >= 18 && idade < 60) {
  console.log("você é um adulto");
  // && as condicionais do if tem que ser verdadeiras.
}
if (idade >= 18 || idade < 60) {
  console.log("você tem a idade menor do  que 60");
  // || umas das condicionais tem que ser verdadeira.
}

// Utlizando mais de um condicional dependente da outra.

if (idade < 18) {
  console.log("você é uma criança");
} else if (idade > 18 && idade < 60) {
  console.log("você é um adulto");
} else if (idade > 60) {
  console.log("você é um idoso");
}
