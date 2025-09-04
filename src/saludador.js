//saludador de acuerdo a la iteracion 
//iteracion 1: saluda con "Hola" programa 
//iteracion 2: saluda con "Hola {nombre}" si el nombre es valido
export default function saludador(nombre) {
    if (nombre) {
        return `Hola ${nombre}`;
    } else {
        return "Hola";
    }   
}