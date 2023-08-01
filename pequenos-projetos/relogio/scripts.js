function getHoraAtual() {
    const horaAtual = new Date();

    const horas = horaAtual.getHours().toString().padStart(2, '0');
    const minutos = horaAtual.getMinutes().toString().padStart(2, '0');
    const segundos = horaAtual.getSeconds().toString().padStart(2, '0');

    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;

}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeBackgroundColor() {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
}

setInterval(getHoraAtual, 1000)
setInterval(changeBackgroundColor, 1000);