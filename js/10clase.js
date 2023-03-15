//forma vieja de obtencion de datos

// fetch('https://api.codetabs.com/v1/proxy?quest=https://dolarhoy.com/cotizaciondolarblue')
//   .then(response => response.text())
//   .then(html => {
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(html, 'text/html');
//     const ventaElement = doc.querySelector('#sitio > section > div > div.cotizacion_moneda > div.tile.is-ancestor.is-vertical > div.tile.cotizacion_value > div.tile.is-parent.is-8 > div:nth-child(2) > div.value');
//     const venta = ventaElement.textContent.trim();
//     console.log("Valor ", venta);
//   })
//   .catch(error => console.error(error));


// obtener informacion de otra pagina
const email = "ras"
const clave = 1234
var datos = []

fetchDolarHoy()




async function fetchDolarHoy() {
    try {
        const response = await fetch('https://api.codetabs.com/v1/proxy?quest=https://dolarhoy.com/cotizaciondolarblue');
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const ventaElement = doc.querySelector('#sitio > section > div > div.cotizacion_moneda > div.tile.is-ancestor.is-vertical > div.tile.cotizacion_value > div.tile.is-parent.is-8 > div:nth-child(2) > div.value');
        venta = parseFloat(ventaElement.textContent.trim().replace('$', '').replace('.', ','));
        console.log("Venta: " + venta)
        return venta
    } catch (error) {
        console.error(error);
    }
}

///////////////////////////
document.querySelectorAll("#dolarHoy")[0].innerText = "(Inicie seción)"
document.querySelectorAll("#dolarHoy")[0].classList.add("text-danger");

function obtenerDatos(emailIngresado, claveIngresada) {
    emailIngresado = document.getElementById("emailEntrada").value
    claveIngresada = document.getElementById("claveEntrada").value
    datos.push(emailIngresado, claveIngresada)
    console.log(datos)
    if (email == datos[0] && clave == datos[1]) {
        console.log("Bienvenido")
        setTimeout(ocultarVentana("Modal"), 500)
        agregaValor()
        cambiaNombreBoton('#modal', 'Hola: Ramiro')
        cambiaIdBoton('#modal', 'perfilModal')
        cambiaNombreBoton('#contactar', 'Comentarios')
        cambiaIdBoton('#contactar', 'leerdatos')




    } else {
        alert("mal")
        setTimeout(actualizar, 1000)
    }
}

function agregaValor() {
    document.querySelectorAll("#dolarHoy")[0].innerText = venta + " Pesos";
    document.querySelectorAll("#dolarHoy")[0].classList.add("text-danger");

}

function cambiaNombreBoton(boton, nombre) {
    // seleccionar el botón por su id
    var button = document.querySelector(boton);
    // cambiar el texto del botón
    button.textContent = nombre;
}

function cambiaIdBoton(boton, id) {
    // seleccionar el botón por su id
    var button = document.querySelector(boton);
    // cambiar el ID del botón
    button.id = id;

}


let ocultarVentana = (id) => {
    var modal = document.getElementById(id)
    modal.style.display = "none"
    // Seleccionar el body del documento
    // seleccionar el elemento con la clase "modal-backdrop show"

    var modalBackdrop = document.querySelector('.modal-backdrop.show');

    // remover la clase "modal-backdrop" del elemento
    modalBackdrop.classList.remove('modal-backdrop');

    // remover la clase "show" del elemento
    modalBackdrop.classList.remove('show');

}

let actualizar = () => {
    location.reload()
}


// desconecta al usuario restableciendo valores
var offlineButton = document.getElementById('offline');
offlineButton.addEventListener('click', function () {
    cambiaNombreBoton('#perfilModal', 'Iniciar Sesión')
    cambiaIdBoton('#perfilModal', 'modal')
    ejecutarBotoInicio()
    setTimeout(() => {
        cambiaNombreBoton('#leerdatos', 'Contactar')
        cambiaIdBoton('#leerdatos', 'contactar')
    }, 500);
    ocultarVentana("Modal1")
})



let boton = document.getElementById("login")
boton.addEventListener("click", obtenerDatos)

var miBoton = document.getElementById('modal');
miBoton.addEventListener('click', function () {
    event.preventDefault();
    var id = miBoton.id;
    // detecta que Id de Boton esta activa
    if (id === "modal") {
        var myModal = new bootstrap.Modal(document.querySelector('#Modal'))
        myModal.show();
    } else {
        var myModal = new bootstrap.Modal(document.querySelector('#Modal1'))
        myModal.show();
    }

});



// desplazamiento de menu

//Ejecutar función en el evento click
document.getElementById("btn_open").addEventListener("click", open_close_menu);

//Declaramos variables
var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");

//Evento para mostrar y ocultar menú
function open_close_menu() {
    body.classList.toggle("body_move");
    side_menu.classList.toggle("menu__side_move");
}

//Si el ancho de la página es menor a 760px, ocultará el menú al recargar la página

if (window.innerWidth > 760) {

    body.classList.add("body_move");
    side_menu.classList.add("menu__side_move");
}

//Haciendo el menú responsive(adaptable)

window.addEventListener("resize", function () {

    if (window.innerWidth < 760) {

        body.classList.remove("body_move");
        side_menu.classList.remove("menu__side_move");
    }

    if (window.innerWidth > 760) {

        body.classList.add("body_move");
        side_menu.classList.add("menu__side_move");
    }

});

const closeBtns = document.querySelectorAll('.close-btn');
for (let i = 0; i < closeBtns.length; i++) {
    closeBtns[i].addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        this.closest('.card').classList.remove('hover');
    });
}

/////////////////////////////
// Obtener los botones menu//
/////////////////////////////

const infoButton = document.getElementById('informacion');
const datosButton = document.getElementById('datos');
const contactoButton = document.getElementById('contactar');
const lecturaButton = document.getElementById('leerdatos');
const mainContent = document.getElementById('main');

const defaultContent = document.getElementById('ventana1').innerHTML;


// solucion a un error de relogin
function ejecutarBotoInicio() {
    var botonVolver = document.getElementById('volver');
    botonVolver.click();
}
// Boton inicio
document.getElementById('volver').addEventListener('click', () => {
    var id = miBoton.id;
    console.log(miBoton)
    if (id === "modal") {
        mainContent.innerHTML = defaultContent;
    } else {
        mainContent.innerHTML = defaultContent;
        agregaValor();
    }
    // Cambiar el contenido del main al contenido de la ventana 1

})


// Boton informacion
infoButton.addEventListener('click', () => {
    // Obtener el contenido de la página "informacion.html"
    fetch('tareaMaquetacion.html')
        .then(response => response.text())
        .then(data => {
            // Insertar el contenido en el main
            mainContent.innerHTML = data;
        });
});

// Boton Datos
datosButton.addEventListener('click', () => {
    // Cambiar el contenido del main a datos personales
    fetch('10claseDatos.html')
            .then(response => response.text())
            .then(data => {
                // Insertar el contenido en el main
                mainContent.innerHTML = data; 
            });
});


// Botones contactar / leerdatos depende del login
contactoButton.addEventListener('click', () => {
    // Obtener el contenido de la página "informacion.html"
    var id = contactoButton.id;
    // detecta que Id de Boton esta activa
    if (id === "contactar") {
        // Boton contactar
        fetch('10claseContacto.html')
            .then(response => response.text())
            .then(data => {
                // Insertar el contenido en el main
                mainContent.innerHTML = data;
                window.addEventListener('load', tomarDatosContacto()); //arreglo a no tener que hacer 2 click
            });
    } else {
        // Boton leerdatos
        fetch('10claseLectura.html')
            .then(response => response.text())
            .then(data => {
                // Insertar el contenido en el main
                mainContent.innerHTML = data;
                window.addEventListener('load', mostrarDatos());
            });
    }


});

// // Ocultar el botón cuando se cumpla la condición
// if ( miBoton.id === "modal") {
//     lecturaButton.style.display = "none";
//   }

// // Boton leerdatos
// lecturaButton.addEventListener('click', () => {
//     // Obtener el contenido de la página "informacion.html"
//     fetch('10claseLectura.html')
//         .then(response => response.text())
//         .then(data => {
//             // Insertar el contenido en el main
//             mainContent.innerHTML = data;
//             window.addEventListener('load', mostrarDatos());
//         });
// });



////////////////////////////////////
// Base de datos en ini Encriptado//
////////////////////////////////////
var datosJSON = []
function tomarDatosContacto() {

    // Obtener los elementos del DOM
    const ras = "P-FZx[6P@PJ-wZ'h69cL%y~Oav[N)%fo&hq.aS4qqE(cA=-$@4"
    const nombreInput = document.getElementById('nombre');
    const correoInput = document.getElementById('correo');
    const detalleTextarea = document.getElementById('detalle');
    const formContactoButton = document.getElementById('formContacto');


    // Agregar un evento al botón "Guardar"
    formContactoButton.addEventListener('click', () => {
        // Obtener los valores de los campos de texto y la casilla de texto
        const nombre = nombreInput.value;
        const correo = correoInput.value;
        const detalle = detalleTextarea.value;

        // Realizar acciones con los datos obtenidos
        console.log(nombre, correo, detalle);

        // Crear un objeto con los datos del formulario
        let datos = {
            nombre: nombre,
            correo: correo,
            detalle: detalle
        };
        console.log("datos: ", datos)
        // Convertir los datos a JSON
        datosJSON.push(JSON.stringify(datos))
        console.log("datosJSON: ", datosJSON)
        limpiar()

        //    // Encriptar los datos
        //    let datosEncriptados = CryptoJS.AES.encrypt(datosJSON, ras).toString();
        //    console.log("datosEncriptados: ",datosEncriptados)
        //    // Crear un objeto Blob con los datos encriptados
        //    let blob = new Blob([datosEncriptados], { type: "text/plain;charset=utf-8" });
        //    console.log("blob: ",blob)
        //    // Guardar el archivo en el sistema del usuario
        // saveAs(blob, "datos.txt");



    });
}
//    limpiar campos formulario
function limpiar() {
    document.getElementById('nombre').value = "";
    document.getElementById('correo').value = "";
    document.getElementById('detalle').value = "";
}

// leer / mostrar datos en tabla
function mostrarDatos() {
    console.log(datosJSON)
    // datosJSON=['{"nombre":"sdfsdf","correo":"ras@ras.com","detalle":"assssss"}', '{"nombre":"dasd","correo":"ssss@dasd","detalle":"daddsss"}']
    // Recorremos el arreglo y convertimos cada objeto JSON a objeto literal
    datos = datosJSON.map(function (json) {
        return JSON.parse(json);
    });

    // Recorremos los datos y construimos la tabla en HTML
    for (var i = 0; i < datos.length; i++) {
        var fila = "<tr id='fila-" + i + "'>";
        fila += "<td>" + datos[i].nombre + "</td>";
        fila += "<td>" + datos[i].correo + "</td>";
        fila += "<td>" + datos[i].detalle + "</td>";
        fila += "<td><button class='borrar-btn' id='fila" + i + "'>Leido</button></td>"; // Agregar botón Listo
        fila += "</tr>";
        document.getElementById("datos-table").innerHTML += fila;
    }

    // Función para borrar la fila correspondiente al botón "Listo" que se hizo clic
    function borrarFila(id) {
        // Eliminar la fila de la tabla
        var fila = document.getElementById("fila-" + id);
        fila.parentNode.removeChild(fila);
        // Eliminar la fila de datosJSON
        datosJSON.splice(id, 1);
        // Volver a mostrar los datos actualizados en la tabla
    }

    // Agregar un event listener a cada botón "Listo"
    var botones = document.querySelectorAll(".borrar-btn");
    for (var i = 0; i < botones.length; i++) {
        botones[i].addEventListener("click", function () {
            var id = this.getAttribute("id").substring(4);
            borrarFila(id);
        });
    }
}