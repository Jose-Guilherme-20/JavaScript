let colors = ["red", "blue", "green"];

let idades = [20, 30, 40];

let ingredientes = ["agua", "farinha", "ovo", "corante", "sal"];

// metodo Push adiciona um item no final da lista
ingredientes.push("Açucar");

// metodo pop remove um item no final da lista
ingredientes.pop();

// metodo shift remove um item no início da lista
ingredientes.shift();

console.log(ingredientes);
console.log(`Total de ingredientes: ${ingredientes.length}`);
