let precos = [88, 45, 75, 30, 400];
let total = 0;

precos.forEach(function(preco, indice) {
    console.log((indice + 1) + " - R$ " + preco);
    total = total + preco;
});

console.log("Total: R$", total);