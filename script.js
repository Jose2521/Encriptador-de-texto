function botonEncriptar() {
    const texto = document.querySelector('.text-area').value;
    const textoEncriptado = encriptarTexto(texto);
    document.querySelector('.mensaje').value = textoEncriptado;
    actualizarInterfaz();
}

function encriptarTexto(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function botonDesencriptar() {
    const texto = document.querySelector('.text-area').value;
    const textoDesencriptado = desencriptarTexto(texto);
    document.querySelector('.mensaje').value = textoDesencriptado;
    actualizarInterfaz();
}

function desencriptarTexto(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

function copiarTexto() {
    const mensaje = document.querySelector('.mensaje');
    mensaje.select();
    document.execCommand('copy');
}

document.querySelector('.mensaje').addEventListener('input', actualizarInterfaz);

function actualizarInterfaz() {
    const mensajeTextarea = document.querySelector('.mensaje');
    const placeholderContenido = document.querySelector('.placeholder-contenido');
    const botonCopiar = document.querySelector('.boton-copiar');

    if (mensajeTextarea.value.trim() !== "") {
        placeholderContenido.style.display = 'none';
        botonCopiar.style.display = 'block';
    } else {
        placeholderContenido.style.display = 'flex';
        botonCopiar.style.display = 'none';
    }
}