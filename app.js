document.getElementById('edadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let edades = [];
    for (let i = 1; i <= 10; i++) {
        edades.push(parseInt(document.getElementById(`edad${i}`).value));
    }
    let mayoresDeEdad = 0;
    let menoresDeEdad = 0;
    edades.forEach(edad => {
        if (edad >= 18) {
            mayoresDeEdad++;
        } else {
            menoresDeEdad++;
        }
    });
    let porcentajeMayores = (mayoresDeEdad / 10) * 100;
    let porcentajeMenores = (menoresDeEdad / 10) * 100;
    document.getElementById('result').innerHTML = `
        <p>Porcentaje de personas mayores de edad (≥ 18): ${porcentajeMayores.toFixed(2)}%</p>
        <p>Porcentaje de personas menores de edad (< 18): ${porcentajeMenores.toFixed(2)}%</p>
    `;
});