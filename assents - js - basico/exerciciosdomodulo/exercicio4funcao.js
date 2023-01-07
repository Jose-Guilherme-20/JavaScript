function porcetagem(numero1, numero2) {
  let resultado = (numero2 / numero1) * 100;
  console.log(` ${numero2}% de ${numero1} é ${resultado}`);
  return resultado;
}
let teste = porcetagem(100, 80);

// Calcule o preço do imóvel
// - m2 = 3.000
// Se tiver 1 quarto, o m2 é 1x
//se tiver 2 quartos, o m2 é 1.2x
// Se tiver 3 quartos, o m2 é 1.5x

function calcularImovel(metragem, quartos) {
  let m2 = 3000;

  switch (quartos) {
    case 1:
      if (quartos === 1) {
        var preco = metragem * m2 * 1;
      }
      break;
    case 2:
      if (quartos === 2) {
        var preco = metragem * m2 * 1.2;
      }
      break;
    case 3:
      if (quartos === 3) {
        var preco = metragem * m2 * 1.5;
      }
      break;
    default:
      console.log("error");
      break;
  }
  return preco;
}
let metragem = 100;
let quartos = 2;
let preco = calcularImovel(metragem, quartos);
console.log(preco);
console.log(
  `O preço do Imóvel é: ${metragem} * ${quartos} Valor total: ${preco}`
);
