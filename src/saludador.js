//saludador de acuerdo a la iteracion 
//iteracion 1: saluda con "Hola" programa 
//iteracion 2: saluda con "Hola {nombre}" si el nombre es valido
//iteracion 3:Saludar de acuerdo a la hora del dia utilizando let fechaActual = new Date();
//let horaActual = fechaActual.getHours();
export default function saludador(nombre, hora) {
    if (!nombre && !hora) {
        return "Hola";
    } else if (nombre && !hora) {
        return `Hola ${nombre}`;
    } else if (nombre && hora < 12) {
        return `Buenos días ${nombre}`;
    } else if (nombre && hora >= 12) {
        return `Buenas tardes ${nombre}`;
    }
    return "Hola";
}