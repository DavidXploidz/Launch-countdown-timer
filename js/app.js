// Variables Globales
const diasText = document.querySelector('.card--day');
const horasText = document.querySelector('.card--hour');
const minutosText = document.querySelector('.card--min');
const segundosText = document.querySelector('.card--seg');

document.addEventListener('DOMContentLoaded', function(){
    fechas();
});

function fechas(){
    // Fecha actual
    const fechaActual = new Date();
    let diaAc = fechaActual.getDate();
    let horasAc = fechaActual.getHours();
    let minutosAc = fechaActual.getMinutes();
    let segundosAc = fechaActual.getSeconds();

    // Fecha de Inauguracion
    const fechaOpen = new Date(2023,03,30,23,59); /*año-mes-dia-hora-minutos*/
    let diaIn = fechaOpen.getDate();
    let horasIn = fechaOpen.getHours();
    let minutosIn = fechaOpen.getMinutes();

    if(minutosIn === 00){
        console.log('Deden ser 59 minutos');
        minutosIn = 61;
    }

    let segundos = 60;
    segundosAc -= segundos;

    // Fechas con diferencia
    const dia = parseInt(diaIn - diaAc);
    const horasFinal= parseInt(horasIn - horasAc) - 1;
    const minutosFinal = parseInt(minutosIn - minutosAc) - 1;
    const segundosFinal = segundosAc * - 1;


    // Enviar a mostrar la diferencia en dias que faltan
    mostrarFecha([dia,horasFinal,minutosFinal,segundosFinal]);
}


// Funcion para mostrar la fecha con su logica
function mostrarFecha([dia,horasFinal,minutosFinal,segundosFinal]){

    if(dia < 0){
        diasText.textContent = 0;
        horasText.textContent = 0;
        minutosText.textContent = 0;
        segundosText.textContent = 0;
        return;
    }

    diasText.textContent = dia;
    horasText.textContent = horasFinal;
    minutosText.textContent = minutosFinal;
    segundosText.textContent = segundosFinal;

    let horas = horasFinal;
    let minutos = minutosFinal;
    let segundos = segundosFinal;

    const contador = setInterval(() => {
        segundos --;
        segundosText.textContent = segundos;
        // Si se cumpla esta condicion deten el contador
        if(dia === 0 && horas === 0 && minutos === 0 && segundos === 0){
            clearInterval(contador);
            segundos = 0;
            segundosText.textContent = 0;
            // console.log('detente alv');
        }else{
            if(segundos === 0){
                if(dia === 0 && horas === 0 && minutos === 0){
                    minutos = 0;
                    minutosText.textContent = minutos;
                    return;
                }else{
                    // Actualiza la cantidad en pantalla
                    segundosText.textContent = 59;
                    segundos = 59;
                    // Restale los minutos y muestralos en pantalla
                    minutos--;
                    minutosText.textContent = minutos;
                }
            }
            if(minutos === 0){
                if(horas === 0 && dia === 0){
                    horas = 0;
                    horasText.textContent = horas;
                    return;
                }else{
                    // Actualiza la cantidad en pantalla
                    minutos = 59;
                    minutosText.textContent = 59;
                    // Restale las horas y muestralas en pantalla
                    horas--;
                    horasText.textContent = horas;
                }
            }
            if(horas === 0){
                if(dia === 0){
                    dia = 0;
                    diasText.textContent = dia;
                    return;
                }else{
                    // Actualiza la cantidad en pantalla
                    horas = 23;
                    horasText.textContent = 23;
                    // Restale los dias y muestralos en pantalla
                    dia--;
                    diasText.textContent = dia;
                }
            }
        }
    },1000);
   
}