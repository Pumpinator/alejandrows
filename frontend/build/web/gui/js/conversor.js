function convertirBinario() {
    let numero = document.getElementById("txtNumero").value;

    const ruta = "http://localhost:8080/alejandrows/api/conversor/binario?entero=" + numero

    fetch(ruta).then(response => response.json().then(response => {
        document.getElementById("txtBinario").innerHTML = response.binario
    }))
}

function convertirDistancia() {
    let de = document.getElementById("selectDe").selectedIndex;
    let hacia = document.getElementById("selectHacia").selectedIndex;
    let numero = document.getElementById("txtNumero").value;

    const ruta = "http://localhost:8080/alejandrows/api/conversor/distancia?de=" + de + "&hacia=" + hacia + "&entero=" + numero

    fetch(ruta).then(response => response.json().then(response => {
        document.getElementById("txtDistancia").innerHTML = response.distancia
    }))
}

function convertirTemperatura() {
    let de = document.getElementById("selectDe").selectedIndex;
    let hacia = document.getElementById("selectHacia").selectedIndex;
    let numero = document.getElementById("txtNumero").value;

    const ruta = "http://localhost:8080/alejandrows/api/conversor/temperatura?de=" + de + "&hacia=" + hacia + "&entero=" + numero

    fetch(ruta).then(response => response.json().then(response => {
        document.getElementById("txtTemperatura").innerHTML = response.temperatura
    }))
}