let numeroMagico;

function comenzarJuego() {
    numeroMagico = Math.floor(Math.random() * 100) + 1;
    alert('¡Número mágico generado! Comienza a adivinar.');
    $('#juego').show();
}

function verificarNumero() {
    const numeroUsuario = parseInt($('#numeroInput').val());

    if (isNaN(numeroUsuario)) {
        alert('Por favor, ingresa un número válido.');
        return;
    }

    if (numeroUsuario === numeroMagico) {
        alert('¡Felicidades! Has adivinado el número.');
        reiniciarJuego();
    } else if (numeroUsuario < numeroMagico) {
        alert('El número que ingresaste es menor. Intenta de nuevo.');
    } else {
        alert('El número que ingresaste es mayor. Intenta de nuevo.');
    }
}

function reiniciarJuego() {
    $('#juego').hide();
    alert('Presiona "Comenzar el juego" para jugar de nuevo.');
}