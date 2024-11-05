document.getElementById('calcularBtn').addEventListener('click', function() {
    const iteraciones = parseInt(document.getElementById('iteraciones').value);
    calcularPi(iteraciones);
});

function calcularPi(iteraciones) {
    let dentroDelCirculo = 0;
    let totalPuntos = 0;

    // Simulación de Monte Carlo
    for (let i = 0; i < iteraciones; i++) {
        // Generamos puntos aleatorios (x, y) entre 0 y 1
        let x = Math.random();
        let y = Math.random();
        
        // Comprobamos si el punto está dentro del círculo
        if (x * x + y * y <= 1) {
            dentroDelCirculo++;
        }

        totalPuntos++;
    }

    // Estimación de pi
    let piEstimada = (dentroDelCirculo / totalPuntos) * 4;

    // Actualizamos la interfaz con los resultados
    document.getElementById('piValor').textContent = piEstimada.toFixed(6);
    document.getElementById('puntosCirculo').textContent = dentroDelCirculo;
    document.getElementById('puntosTotales').textContent = totalPuntos;
}
