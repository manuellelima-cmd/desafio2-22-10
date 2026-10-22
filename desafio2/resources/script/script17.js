let notas = [9,8,5,7.5,6.5,10]

let nota = notas.find(n => n >= 9);

if (nota !== undefined) {
    console.log("Primeira nota encontrada: " + nota);
} else {
    console.log("Não existe nota maior ou igual a 9.");
}