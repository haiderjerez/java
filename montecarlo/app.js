document.getElementById('calcularBtn').addEventListener('click', function() {
    const iteraciones = parseInt(document.getElementById('iteraciones').value);
    calcularPi(iteraciones);
});

function calcularPi(iteraciones) {
    let dentroDelCirculo = 0;
    let totalPuntos = 0;
    for (let i = 0; i < iteraciones; i++) {
        let x = Math.random();
        let y = Math.random();
        if (x * x + y * y <= 1) {
            dentroDelCirculo++;
        }
        totalPuntos++;
    }

    let piEstimada = (dentroDelCirculo / totalPuntos) * 4;

    document.getElementById('piValor').textContent = piEstimada.toFixed(6);
    document.getElementById('puntosCirculo').textContent = dentroDelCirculo;
    document.getElementById('puntosTotales').textContent = totalPuntos;
}
