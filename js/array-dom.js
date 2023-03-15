// Crear el array de colores
const colores = ["rojo", "verde", "azul", "amarillo", "negro"];

// Obtener el tercer color del array
const tercerColor = colores[2];

// Acceder a la primera letra del primer color del array
console.log(colores[0][0]); // imprime "r"

// Generar un número aleatorio entre 1 y 99
const numAleatorio = Math.floor(Math.random() * 99) + 1;
console.log(numAleatorio);

// Crear un array con los números del 1 al 10
const numeros = [];
for (let i = 1; i <= 10; i++) {
    numeros.push(i);
}
console.log(numeros);

// Crear un array con 10 números aleatorios
const numerosAleatorios = [];
for (let i = 0; i < 10; i++) {
    numerosAleatorios.push(Math.floor(Math.random() * 100));
}
console.log(numerosAleatorios);

// Crear una copia del array de números aleatorios
const copiaNumerosAleatorios = [...numerosAleatorios];
console.log(numerosAleatorios);
console.log(copiaNumerosAleatorios);

// Pedir cadenas de texto hasta que se escriba "cancelar" y mostrarlas concatenadas con guiones medios
let cadenas = "";
let cadena;
do {
    cadena = prompt("Ingrese una cadena de texto (o escriba 'cancelar' para salir)");
    if (cadena !== "cancelar") {
        cadenas += cadena + "-";
    }
} while (cadena !== "cancelar");
console.log(cadenas.slice(0, -1)); // elimina el último guión





fetchDolarHoy()
const inicio = document.getElementById('convertir1');
inicio.addEventListener('click', () => {
    convertir();
})

const inicio1 = document.getElementById('convertir2');
inicio1.addEventListener('click', () => {
    convertir2();
})


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

function convertir() {
    const dolares = parseFloat(document.getElementById("dolares").value);
    const pesos = dolares * venta;
    document.getElementById("pesos").value = pesos;
}

function convertir2() {
    console.log("entro2")
    const pesos = document.getElementById("pesos1").value;
    const dolares = pesos / venta;
    document.getElementById("dolares1").value = dolares;
}