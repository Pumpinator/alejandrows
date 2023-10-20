function saludar() {
    const ruta = "http://localhost:8080/alejandrows/api/hola/saludar"

    fetch(ruta).then(response => response.json().then(response => {
        let result = JSON.stringify(response)
        document.getElementById("txtSaludar").innerHTML = result
    }))
}

function saludarNombre() {
    let nombre = document.getElementById("txtNombre").value;

    const ruta = "http://localhost:8080/alejandrows/api/hola/saludarnombre?nombre=" + nombre

    fetch(ruta).then(response => response.json().then(response => {
        let result = JSON.stringify(response)
        document.getElementById("txtSaludarNombre").innerHTML = result
    }))
}

function saludarGeneracion() {
    let nombre = document.getElementById("txtNombre1").value;
    let año = document.getElementById("txtAño").value;

    const ruta = "http://localhost:8080/alejandrows/api/hola/saludargeneracion?nombre=" + nombre + "&año=" + año

    fetch(ruta).then(response => response.json().then(response => {
        let result = JSON.stringify(response)
        document.getElementById("txtSaludarGeneracion").innerHTML = result
    }))
}

    function saludarZodiaco() {
        let nombre = document.getElementById("txtNombre2").value;
        let dia = document.getElementById("txtDia").value;
        let mes = document.getElementById("txtMes").value;

        const ruta = "http://localhost:8080/alejandrows/api/hola/saludarzodiaco?nombre=" + nombre +
         "&dia=" + dia + 
         "&mes=" + mes

        fetch(ruta).then(response => response.json().then(response => {
            let result = JSON.stringify(response)
            document.getElementById("txtSaludarZodiaco").innerHTML = result
        }))
    }