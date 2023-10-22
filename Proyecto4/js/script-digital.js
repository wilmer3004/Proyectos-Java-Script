function calcularTiempo(){
    let tiempo = new Date();

    let hora = tiempo.getHours();
    let minuto = tiempo.getMinutes();
    let segundo = tiempo.getSeconds();
    // Formato de horas Am y Pm
    let AMPM = hora >= 12 ? 'PM' : 'AM';

    // Formato de solo 12 horas
    hora = hora % 12;
    hora = hora ? hora : 12;

    hora = hora < 10 ? "0" + hora : hora;
    minuto = minuto < 10 ? "0" + minuto : minuto;
    segundo = segundo < 10 ? "0" + segundo : segundo;

    let pantallaReloj = hora + ":" + minuto + ":" + segundo + " " + AMPM;
    let relojDigital = document.querySelector(".reloj-digital")
    relojDigital.innerHTML = pantallaReloj;
    

}

setInterval(calcularTiempo, 1000)






