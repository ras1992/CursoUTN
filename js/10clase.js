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
    ejecutarBotoInicio();
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

const defaultContent = document.getElementById('main2');


// solucion a un error de relogin
function ejecutarBotoInicio() {
    var botonVolver = document.getElementById('volver');
    botonVolver.click();
}
// Boton inicio
document.getElementById('volver').addEventListener('click', () => {
    var id = miBoton.id
    if (id === "modal") {
        window.addEventListener('load', mainContent.innerHTML = defaultContent.innerHTML);
    } else {
        window.addEventListener('load', mainContent.innerHTML = defaultContent.innerHTML);
        agregaValor();
    }
    // Cambiar el contenido del main al contenido
})


// Boton informacion
infoButton.addEventListener('click', () => {
    // Obtener el contenido de la página "informacion.html"
    fetch('10claseInformacion.html')
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


    const toastTrigger = document.getElementById('formContacto')
    const toastLiveExample = document.getElementById('liveToast')
    if (toastTrigger) {
        toastTrigger.addEventListener('click', () => {
            const toast = new bootstrap.Toast(toastLiveExample)
            toast.show()
        })
    }

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

        smsWhat(nombre, correo, detalle)
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
// Enviar sms al usuario

function smsWhat(nombre, correo, detalle) {
    // dato= encodeURIComponent(dato.replace(/\n/g, '%0A'));
    url = `http://ras.infinityfreeapp.com/Extras/smsW.php?nom=${nombre}&cor=${correo}&det=${detalle}`
    setTimeout(() => {
        window.open(url, '_blank');
    }, 2000);
   
    // const link = document.createElement('a');
    // link.setAttribute(`href`, `http://ras.infinityfreeapp.com/Extras/smsW.php?texto=${dato}`);
    // link.innerText = 'Ir a Ejemplo';
    // document.body.appendChild(link);

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
animacion()
/* //////////////// Información /////////////// */
function animacion() {
    const nombre = "Kuspita, Ramiro";
    const maquina_escribir_anim = document.querySelector(".maquina_escribir_anim ");

    let i = 0;
    let esBorrado = false;
    let count = 0; // variable de conteo

    function type() {
        const texto = nombre.slice(0, i);

        if (!esBorrado) {
            maquina_escribir_anim.textContent = texto + "_";
            i++;
            if (i > nombre.length) {
                maquina_escribir_anim.classList.add("complete");
                setTimeout(() => {
                    maquina_escribir_anim.classList.add("blink");
                    setTimeout(() => {
                        maquina_escribir_anim.classList.remove("blink");
                        setTimeout(() => {
                            maquina_escribir_anim.classList.add("blink");
                            setTimeout(() => {
                                maquina_escribir_anim.classList.remove("blink");
                                setTimeout(() => {
                                    maquina_escribir_anim.classList.add("blink");
                                    setTimeout(() => {
                                        maquina_escribir_anim.classList.remove("blink");
                                        setTimeout(() => {
                                            maquina_escribir_anim.classList.add("complete");
                                            maquina_escribir_anim.classList.remove("blink");
                                        }, 10000);
                                    }, 500);
                                }, 500);
                            }, 500);
                        }, 500);
                    }, 500);
                }, 300);


            }
        } else {
            maquina_escribir_anim.textContent = texto + "";
            i--;
            // incrementar la variable de conteo
            count++;
            console.log("Contando: " + count)
            if (i < 9) {
                esBorrado = false;
            }
        }

        setTimeout(() => {
            type();
        }, 300);

        if (i === nombre.length && count < 1 * 15) {
            esBorrado = true;
            setTimeout(() => {
                type();
            }, 10500);
        }
    }

    let timerId = setTimeout(type, 0);
}
/* //////////////// Información /////////////// */


/* //////////////// Anim bienvenida /////////////// */

window.addEventListener('load', function () {
    const textoProfesion = document.getElementById('texto-profesion');
    const textoEspecialidad = document.getElementById('texto-especialidad');
    const profesion = "Programador";
    const especialidad = "Desarrollador web";

    // Espera 2 segundos antes de iniciar la animación
    setTimeout(function () {
        // Agrega la clase "escribiendo" para la profesión
        textoProfesion.classList.add('escribiendo');

        // Simula el efecto de la máquina de escribir para la profesión
        for (let i = 0; i < profesion.length; i++) {
            setTimeout(function () {
                textoProfesion.innerHTML = profesion.slice(0, i + 1);
            }, 100 * i); // Espera 100ms por cada letra
        }

        // Espera a que termine la animación de la profesión antes de borrarla y mostrar la especialidad
        setTimeout(function () {
            // Simula el efecto de borrar la profesión
            for (let i = profesion.length; i >= 0; i--) {
                setTimeout(function () {
                    textoProfesion.innerHTML = profesion.slice(0, i);
                }, 100 * (profesion.length - i)); // Espera 100ms por cada letra borrada
            }

            // Espera a que termine de borrar la profesión antes de mostrar la especialidad
            setTimeout(function () {
                // Agrega la clase "escribiendo" para la especialidad
                textoEspecialidad.classList.add('escribiendo');

                // Simula el efecto de la máquina de escribir para la especialidad
                for (let i = 0; i < especialidad.length; i++) {
                    setTimeout(function () {
                        textoEspecialidad.innerHTML = especialidad.slice(0, i + 1);
                    }, 100 * i); // Espera 100ms por cada letra
                }
            }, 1000); // Espera 1 segundo después de borrar la profesión
        }, (profesion.length * 100) + 1000); // Espera el tiempo total de la animación de la profesión más 1 segundo
    }, 2000); // Espera 2 segundos antes de iniciar la animación
});

/* //////////////// Anim bienvenida /////////////// */


////////////// animacion iconos ///////////////
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

function animIconos() {
    root.style.setProperty("--marquee-elements", marqueeContent.children.length);
    for (let i = 0; i < marqueeElementsDisplayed; i++) {
        marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    }
}
window.addEventListener('load', animIconos())

////////////// dark mode ///////////////
const cambioEstiloBtn = document.getElementById('cambio-estilo');
var ind = 1

cambioEstiloBtn.addEventListener('click', () => {
    // Cambiar el contenido del main a datos personales
    if (ind == 0) {
        console.log("si")
        ind = 1;
        cambioEstilo(ind)
    } else {
        console.log("no")
        ind = 0;
        cambioEstilo(ind)
    }
});
cambioEstilo(ind)
function cambioEstilo(n) {
    //elije la opcion nocturna como primera
    if (ind == 1) {
        var color = 'rgba(226, 132, 75,1)'
        var fondo = 'rgba(53, 57, 59,0.5)'
        var fondoCol = 'rgba(53, 57, 59, 1)'
    } else {
        var color = '#E2844B'
        var fondoCol = 'rgba(219, 219, 219, 1)'
    }

    document.documentElement.style.setProperty('--ras1', color);
    document.documentElement.style.setProperty('--ras2', fondo);
    document.documentElement.style.setProperty('--ras3', fondoCol);
}

// Boton informacion

function cartaBtnF(){
        // Obtener el contenido de la página "Carta Presentacion"
        fetch('10clasePresentacion.html')
            .then(response => response.text())
            .then(data => {
                // Insertar el contenido en el main
                mainContent.innerHTML = data;
                es()
            });
}

// Obtener el elemento HTML con id="año"
const elementoAnio = document.getElementById("año");
// Obtener el año actual
const anioActual = new Date().getFullYear();
// Asignar el valor del año actual al elemento HTML
elementoAnio.textContent = anioActual;