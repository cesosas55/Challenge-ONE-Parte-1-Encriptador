//Se asocian los botones a sus respectivas variables
let botonEncriptar = document.getElementById("encriptar");
let botonDesencriptar = document.getElementById("desencriptar");
let botonCopiar = document.getElementById("copiar");
let botones = document.getElementsByClassName("botones");

//Se asocian los cuadros de texto a sus respectivas variables
let textoEntrada = document.getElementById("text-in");
let textoSalida = document.getElementById("output-text");

//Asociación de variables de control para los elementos de la interfaz
let salidaVacia = document.getElementById("empty-output");
let salidaLlena = document.getElementById("full-output");
let cuerpo = document.getElementById("cuerpo");


let cajaVacia = true;
let mensajeEncriptado = "";
let mensajeDesencriptado = "";

function habilitarBotones() {
    /*Modifica el estilo de los botones de encriptar y desencriptar:
    1 - los habilita
    2 - cambia la opacidad
    3 - Cambia el cursor al regular
    */
    botonEncriptar.disabled = false;
    botonEncriptar.style.opacity = 1;
    botonEncriptar.style.cursor = "auto";

    botonDesencriptar.disabled = false;
    botonDesencriptar.style.opacity = 1;
    botonDesencriptar.style.cursor = "auto";
}

function habilitarCopiado() {
    botonCopiar.disabled = false;
    botonCopiar.style.opacity = 1;
    botonCopiar.style.cursor = "auto";
}

function actualizarPagina() {
    if (cajaVacia == true) {
        salidaLlena.style.display = "none";
        salidaVacia.style.display = "inherit";
    }
    else {
        salidaLlena.style.display = "inherit";
        salidaVacia.style.display = "none";
    }
    textoEntrada.focus();
}

function encriptarMensaje() {
    if (textoEntrada.value != "") {
        mensajeEncriptado = textoEntrada.value;
        mensajeEncriptado = mensajeEncriptado.replace(/e/gim, "enter");
        mensajeEncriptado = mensajeEncriptado.replace(/i/gim, "imes");
        mensajeEncriptado = mensajeEncriptado.replace(/a/gim, "ai");
        mensajeEncriptado = mensajeEncriptado.replace(/o/gim, "ober");
        mensajeEncriptado = mensajeEncriptado.replace(/u/gim, "ufat");
    }
    else {
        alert("Para encriptar un mensaje, introdúcelo en la caja izquierda e intenta de nuevo");
        return
    }
    textoSalida.innerHTML = mensajeEncriptado;//Muestra el resultado en la caja derecha
    textoSalida.value = mensajeEncriptado;//asiga el valor a la etiqueta correspondiente
    cajaVacia = false;
    actualizarPagina();
}

function desencriptarMensaje() {
    if (textoEntrada.value != "") {
        mensajeDesencriptado = textoEntrada.value;
        mensajeDesencriptado = mensajeDesencriptado.replace(/enter/gim, "e");
        mensajeDesencriptado = mensajeDesencriptado.replace(/imes/gim, "i");
        mensajeDesencriptado = mensajeDesencriptado.replace(/ai/gim, "a");
        mensajeDesencriptado = mensajeDesencriptado.replace(/ober/gim, "o");
        mensajeDesencriptado = mensajeDesencriptado.replace(/ufat/gim, "u");
    }
    else {
        alert("Para desencriptar un mensaje, introdúcelo en la caja izquierda e intenta de nuevo");
        return
    }
    textoSalida.innerHTML = mensajeDesencriptado;//Muestra el resultado en la caja derecha
    textoSalida.value = mensajeDesencriptado;//asiga el valor a la etiqueta correspondiente
    cajaVacia = false;
    actualizarPagina();
}

function copiarMensaje() {
    if (textoSalida.value != "") {
        navigator.clipboard.writeText(textoSalida.value);
        alert("Mensaje copiado al portapapeles");
    }
    else {
        alert("Nada que copiar al portapapeles");
    }
}


botonEncriptar.onclick = encriptarMensaje;
botonDesencriptar.onclick = desencriptarMensaje;
botonCopiar.onclick = copiarMensaje;
cuerpo.onload = actualizarPagina;
textoEntrada.onclick = habilitarBotones;