//saludador de acuerdo a la iteracion 
//iteracion 1: saluda con "Hola" programa 
//iteracion 2: saluda con "Hola {nombre}" si el nombre es valido
//iteracion 3:Saludar de acuerdo a la hora del dia utilizando let fechaActual = new Date();
//let horaActual = fechaActual.getHours();
//iteracion 4: Saludar por genero
//iteracción 5:Saludar por edad Si tiene edad > 30 saluda con Sr. o Sra.
//iteración 6: Saludar en espanol o en inglés Si el idioma es "ES" saluda en español, si es "EN" saluda en inglés. Por defecto es español.
export default function saludador(nombre, hora, genero, edad, idioma = "ES") {
  if (!nombre) {
    return "Hola";
  } else {
    let saludo = "";
    if (hora !== undefined) {
      if (idioma === "EN") {
        if (hora < 12) {
          saludo = "Good morning";
        } else if (hora < 18) {
          saludo = "Good afternoon";
        } else {
          saludo = "Good evening";
        }
      } else {
        if (hora < 12) {
          saludo = "Buenos días";
        } else if (hora < 18) {
          saludo = "Buenas tardes";
        } else {
          saludo = "Buenas noches";
        }
      }
    } else {
      saludo = "Hola";
    }
    if (edad !== undefined && edad > 30) {
      if (idioma === "EN") {
        if (genero === "F") {
          saludo += " Ms.";
        } else if (genero === "M") {
          saludo += " Mr.";
        }
      } else {
        if (genero === "F") {
          saludo += " Sra.";
        } else if (genero === "M") {
          saludo += " Sr.";
        }
      }
    }
    return `${saludo} ${nombre}`;
  }   
}