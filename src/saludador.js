//saludador de acuerdo a la iteracion 
//iteracion 1: saluda con "Hola" programa 
//iteracion 2: saluda con "Hola {nombre}" si el nombre es valido
//iteracion 3:Saludar de acuerdo a la hora del dia utilizando let fechaActual = new Date();
//let horaActual = fechaActual.getHours();
//iteracion 4: Saludar por genero
//iteracción 5:Saludar por edad Si tiene edad > 30 saluda con Sr. o Sra.
export default function saludador(nombre, hora, genero, edad) {
  if (!nombre) {
    return "Hola";
    } else {
    let saludo = "";
    if (hora !== undefined) {
        if (hora < 12) {
            saludo = "Buenos días";
        } else if (hora < 18) {
            saludo = "Buenas tardes";
        } else {
            saludo = "Buenas noches";
        }
    } else {
        saludo = "Hola";
    }
    if (edad !== undefined && edad > 30) {
        if (genero === "F") {
            saludo += " Sra.";
        } else if (genero === "M") {
            saludo += " Sr.";
        }
    }
    return `${saludo} ${nombre}`;
    }   
}