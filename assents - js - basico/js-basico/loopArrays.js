let cores = ["preto", "branco", "Azul", "vermelho"];

cores.push("verde");
for (let n = 0; n < cores.length; n++) {
  console.log(cores[n]);
}
// Mostra o valor do array
for (let i in cores) {
  console.log(cores[i]);
}

// Mostra o valor das propriedades do Array
for (let cor of cores) {
  console.log(cor);
}
