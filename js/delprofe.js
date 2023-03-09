var email = "reta.daniel.dg@gmail.com"
var clave = 1234
var datos = []
var modal = document.getElementById("exampleModal")
//Desaparecer modal
let desaparecer = () => {
    modal.style.display = "none"
    location.reload()
}

let recargar = () => {
    alert("Los datos son incorrectos, se recargará la página")
    location.reload()
}

// funcion de pedido de datos
let obtenerDatos = (emailIngresado, claveIngresada) => {
    // pedido de datos mediante ID 
    emailIngresado = document.getElementById("exampleInputEmail1").value
    claveIngresada = document.getElementById("exampleInputPassword1").value

    // Agregado de datos al array datos[]
    datos.push(emailIngresado, claveIngresada)

    // validacion 
    if(email == datos[0] && clave == datos[1]){
        setTimeout(desaparecer, 1000)
    }else{
        setTimeout(recargar, 1000)
    }
}

let boton = document.getElementById("obtenerDatos")

boton.addEventListener("click", obtenerDatos)