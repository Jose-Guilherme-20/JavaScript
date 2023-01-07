// Filter retorna um novo Array para filtrar

let fruits = ["Banana", "Laranja", "Maça", "Perá"];

let bigFruits = fruits.filter((item) => {
  return item.length > 4;
});

// console.log(bigFruits);

// every metodo que verificar se todos os item do array segue um padrão
let ok = fruits.every((value) => {
  return value.length > 3;
});
if (ok) {
  console.log("todos são maior que 3");
} else {
  console.log("Não são todos maiores que 3");
}

// some verifica se algum item segue um determinado padrao

let verificar = fruits.some((item) => {
  return item.length > 3;
});
console.log(verificar);

// includes verifica se tem um item especifico dentro do array

let teste = fruits.includes("Perá");

console.log(teste);
