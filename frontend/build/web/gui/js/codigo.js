function generar128() {
    let txt128 = document.getElementById("txt128").value

    const ruta = "http://localhost:8080/alejandrows/api/codigo/generar128?texto=" + txt128

    fetch(ruta).then(response => {
            document.getElementById("img128").setAttribute("src", ruta)
        })
}

function generar93() {
    let txt93 = document.getElementById("txt93").value

    const ruta = "http://localhost:8080/alejandrows/api/codigo/generar93?texto=" + txt93

    fetch(ruta).then(response => {
            document.getElementById("img93").setAttribute("src", ruta)
        })
}

function generar39() {
    let txt39 = document.getElementById("txt39").value

    const ruta = "http://localhost:8080/alejandrows/api/codigo/generar39?texto=" + txt39

    fetch(ruta).then(response => {
            document.getElementById("img39").setAttribute("src", ruta)
        })
}

function generarQR() {
    let txtQR = document.getElementById("txtQR").value

    const ruta = "http://localhost:8080/alejandrows/api/codigo/generarQR?texto=" + txtQR

    fetch(ruta).then(response => {
            document.getElementById("imgQR").setAttribute("src", ruta)
        })
}