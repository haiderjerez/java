// Escribir una programa que calcule los siguientes 3 número de la sucesión 1, 1, 2, -1, 1, -2, -1, ?, ?, ?
function calcularSucesion(n) {
    let sucesion = [1, 1, 2, -1, 1, -2, -1];

    let i = sucesion.length;
    while (sucesion.length < n) {
        if (i % 2 === 0) {
            sucesion.push(sucesion[i -2] - 1);
        } else {
            sucesion.push(sucesion[i -2] * -1);
        }
        i++;
    }
    return sucesion;
}

let sucesion = calcularSucesion(10);
console.log(sucesion);