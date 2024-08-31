function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // La hora '0' debe ser '12'
    
    document.getElementById('hours').textContent = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').textContent = seconds < 10 ? '0' + seconds : seconds;
    document.getElementById('ampm').textContent = ampm;

    const day = now.getDate();
    const month = now.getMonth() + 1; // Los meses comienzan en 0
    const year = now.getFullYear();
    
    document.getElementById('date').textContent = (day < 10 ? '0' + day : day) + '/' +
                                                  (month < 10 ? '0' + month : month) + '/' + year;
}

setInterval(updateClock, 1000);
updateClock(); // Ejecutar la función al cargar la página
