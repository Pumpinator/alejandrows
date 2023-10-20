function calcularCurp(event) {
    event.preventDefault()

    let inputNombre = document.getElementById("inputNombre").value;
    let inputApellidoPaterno = document.getElementById("inputApellidoPaterno").value;
    let inputApellidoMaterno = document.getElementById("inputApellidoMaterno").value;
    let inputFechaNacimiento = document.getElementById("inputFechaNacimiento").value;
    let inputSexo = document.getElementById("inputSexo").value;
    let inputEstado = document.getElementById("inputEstado").value;

    let datos = {
        "nombre": inputNombre,
        "apellidoPaterno": inputApellidoPaterno,
        "apellidoMaterno": inputApellidoMaterno,
        "fechaNacimiento": inputFechaNacimiento,
        "sexo": inputSexo,
        "estado": inputEstado
    };

    let params = {persona: JSON.stringify(datos)};

    let ruta = "http://localhost:8080/alejandrows/api/curp/calcular";

    fetch(ruta, {
        method: "POST",
        headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
        body: new URLSearchParams(params)
    }).then(response => response.json()).then(response => {
        document.getElementById("txtCurp").innerHTML = response.curp;
    
        document.getElementById("jsonRespuesta").innerHTML = JSON.stringify(response);
    });

}