// console.log("Hola mundo")
//alert("Feos a la vista")
//confirm()
//prompt() //solicita ingresar dato

// var nombre="ramiro"
// let apellido="Kus"
// const edad=22

// console.log(nombre,apellido,edad)

// var unNumero = 5;
// var otroNumero = 10;
// if (unNumero  === 5) {
//   let unNumero  = 4; // El alcance es dentro del bloque if
//   var otroNumero  = 1; // El alcance es global
//   console.log("declarado con let",unNumero );  // 4
//   console.log("declarado con var",otroNumero );  // 1
// }
// console.log(unNumero ); // 5
// console.log(otroNumero ); // 1


// function visual(modo){
// 	var modo = prompt("Visualizacíon: (consola o alerta)");
//     var nombre = prompt("Ingrese nombre");    

//   	switch (modo){
//     	case 'consola':
//         	console.log("Nombre de usuario: ",nombre);
//         break;    
//         case 'alerta':
//         	alert("Nombre de usuario: ",nombre);
//         break;

//         default:
//             alert("No eligio nada");

//     }

// }

//  visual();

// var usuario = prompt("Ingrese nombre de usuario: ")
// while(usuario =!"Ivan")

// {usuario = prompt("Ingrese nombre de usuario: ");
// alert(`Mal Nombre: ${usuario}`)
// }

// alert(`Correcto Nombre: ${usuario}`)

menu()

function menu() {
    num = parseInt(prompt("Elija un ejercicio: \n 1_ resta \n2_ perimetro \n3_ temperatura \n4_ Par eh Impar \n5_ texto mayus\n6_ Nota de alumno\n7_ Meses "))
    switch (num) {
        case 1:
            resta()
            break;
        case 2:
            alert(calcular_perimetro(parseInt(prompt("Ingrese superficie en m²: "))))
            break;
        case 3:
            alert(conv_F_a_C(parseInt(prompt("Ingrese temperatura en F°: "))) + " C°")
            break;
        case 4:
            parImprar()
            break;
        case 5:
            text()
            break;
        case 6:
            nota()
            break;
        case 7:
            meses()
            break;
        default:
            alert(`No eligio ninguna opcion`)
        case 8:
            var respuesta = confirm("quiere ingresar nuevamente?")

            if (respuesta) {
                alert("Usted aceptó.");
                menu();
                break;
            }
            else {
                alert("Usted no aceptó.");
                break;
            }

    }

}


// Ejercicio 1
function resta() {
    var a = parseInt(prompt("Ingrese 1° número: "))
    a -= parseInt(prompt("Ingrese 2° número: "))// 
    alert(`Resultado: ${a}`)
}


// Ejercicio 2

function calcular_perimetro(superficie) {
    let lado = Math.sqrt(superficie);
    console.log(lado)
    let perimetro = 4 * lado;
    console.log(perimetro)
    return perimetro
}
//alert(calcular_perimetro(parseInt(prompt("Ingrese superficie en m²: "))))

// Ejercicio 3

function conv_F_a_C(f) {
    let gradosCelsius = (f - 32) * 5 / 9;
    gradosCelsius = gradosCelsius.toFixed(2)
    console.log(gradosCelsius)
    return gradosCelsius;
}

//   

function parImprar() {
    var n = parseInt(prompt("Ingrese número: "))
    if (n % 2 === 0) {
        alert(`El número ${n} es par`)
    } else {
        alert(`El número ${n} es impar`)
    }
}

function text() {
    var text = prompt("Ingrese texto: ")
    alert(`Mensajes en Consola`)
    console.log(text.toUpperCase())
    console.log(text.toLowerCase())
}

function nota() {
    let n = parseInt(prompt("Ingrese nota del 0 al 10: "))
    if (n >= 0 && n <= 3) {
        alert(`Muy deficiente`)
    } else if (n > 3 && n <= 5) {
        alert(`Insuficiente`)
    } else if (n > 5 && n <= 6) {
        alert(`Suficiente`)
    } else if (n > 6 && n <= 7) {
        alert(`Bien`)
    } else if (n > 7 && n <= 9) {
        alert(`Notable`)
    } else if (n > 9 && n <= 10) {
        alert(`Sobresaliente`)
    } else {
        alert(`No te enseñaron a leer?`)
        nota()
    }
}

function meses() {
    let mes = parseInt(prompt("Ingrese el número del mes (1 al 12):"));

    switch (mes) {
        case 4:
        case 6:
        case 9:
        case 11:
            alert("El mes tiene 30 días");
            break;
        case 2:
            alert("El mes tiene 28 o 29 días, dependiendo del año");
            break;
        default:
            alert("El mes tiene 31 días");
            break;
    }
}


