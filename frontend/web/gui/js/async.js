async function hola() {
    let respuesta = await fetch("gui/html/hola.html")
    let texto = await respuesta.text()
    document.getElementById("pagina").innerHTML = texto
}

async function curp() {
    let respuesta = await fetch("gui/html/curp.html")
    let texto = await respuesta.text()
    document.getElementById("pagina").innerHTML = texto
}

async function exchangerates() {
    let respuesta = await fetch("gui/html/exchangerates.html")
    let texto = await respuesta.text()
    document.getElementById("pagina").innerHTML = texto
}

async function heremaps() {
    let respuesta = await fetch("gui/html/heremaps.html");
    let texto = await respuesta.text();
    document.getElementById("pagina").innerHTML = "";
    document.getElementById("pagina").innerHTML = texto;
    cargarMapa1();
    cargarMapa2();
    cargarMapa3();
    cargarMapa4();
}

async function conversorbinario() {
    let respuesta = await fetch("gui/html/conversorbinario.html")
    let texto = await respuesta.text()
    document.getElementById("pagina").innerHTML = texto
}

async function conversordistancia() {
    let respuesta = await fetch("gui/html/conversordistancia.html")
    let texto = await respuesta.text()
    document.getElementById("pagina").innerHTML = texto
}

async function conversortemperatura() {
    let respuesta = await fetch("gui/html/conversortemperatura.html")
    let texto = await respuesta.text()
    document.getElementById("pagina").innerHTML = texto
}

async function codigo() {
    let respuesta = await fetch("gui/html/codigo.html")
    let texto = await respuesta.text()
    document.getElementById("pagina").innerHTML = texto
}