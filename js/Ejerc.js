menu()

function menu() {
    num = parseInt(prompt("Elejir ejercicios del 1 al 14 referencia: \n https://dandelion-rocket-d56.notion.site/Ejercitacion-JS-b041fe1fc5b64fdabe03104343119a92"))
    switch (num) {
        case 1:
            suma()
            break;
        case 2:
            resta()
            break;
        case 3:
            multi()
            break;
        case 4:
            div()
            break;
        case 5:
            areaCirculo()
            break;
        case 6:
            areaTriangulo()
            break;
        case 7:
            areaRectangulo()
            break;
        case 8:
            areaCuadrado()
            break; 
        case 9:
            perimetroCirculo()
            break; 
        case 10:
            perimetroTriangulo()
            break; 
        case 11:
            perimetroRectangulo()
            break; 
        case 12:
            celsiusToFahrenheit()
            break; 
        case 13:
            fahrenheitToCelsius()
            break; 
        case 14:
            minimoDosNumeros()
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

function suma() {
    var a = parseInt(prompt("Ingrese 1° número: "))
    a += parseInt(prompt("Ingrese 2° número: "))// 
    alert(`Resultado: ${a}`)
}
function resta() {
    var a = parseInt(prompt("Ingrese 1° número: "))
    a -= parseInt(prompt("Ingrese 2° número: "))// 
    alert(`Resultado: ${a}`)
}
function multi() {
    var a = parseInt(prompt("Ingrese 1° número: "))
    a = a * parseInt(prompt("Ingrese 2° número: "))// 
    alert(`Resultado: ${a}`)
}
function div() {
    var a = parseInt(prompt("Ingrese 1° número: "))
    a = a / parseInt(prompt("Ingrese 2° número: "))// 
    alert(`Resultado: ${a}`)
}
function areaCirculo() {
    let area = parseInt(prompt("Ingrese el radio: "))
    area = Math.PI * area ** 2;
    alert(`Resultado: ${area}`)
}

function areaTriangulo() {
    let base = parseInt(prompt("Ingrese la base del triángulo: "));
    let altura = parseInt(prompt("Ingrese la altura del triángulo: "));
    let area = (base * altura) / 2
    alert(`El área del triángulo es: ${area}`);
}

function areaRectangulo() {
    let base = parseInt(prompt("Ingrese la base del rectángulo: "));
    let altura = parseInt(prompt("Ingrese la altura del rectángulo: "));
    let area = base * altura;
    alert(`El área del rectángulo es: ${area}`);
}

function areaCuadrado() {
    let lado = parseInt(prompt("Ingrese el lado del cuadrado: "));
    let area = lado ** 2;
    alert(`El área del cuadrado es: ${area}`);
}

function perimetroCirculo() {
    let radio = parseInt(prompt("Ingrese el radio del círculo: "));
    let perimetro = 2 * Math.PI * radio;
    alert(`El perímetro del círculo es: ${perimetro}`);
}

function perimetroTriangulo() {
    let lado1 = parseInt(prompt("Ingrese el primer lado del triángulo: "));
    let lado2 = parseInt(prompt("Ingrese el segundo lado del triángulo: "));
    let lado3 = parseInt(prompt("Ingrese el tercer lado del triángulo: "));
    let perimetro = lado1 + lado2 + lado3;
    alert(`El perímetro del triángulo es: ${perimetro}`);
}

function perimetroRectangulo() {
    let lado1 = parseInt(prompt("Ingrese el primer lado del rectángulo: "));
    let lado2 = parseInt(prompt("Ingrese el segundo lado del rectángulo: "));
    let perimetro = 2 * (lado1 + lado2);
    alert(`El perímetro del rectángulo es: ${perimetro}`);
}

function perimetroCuadrado() {
    let lado = parseInt(prompt("Ingrese el valor del lado del cuadrado: "));
    let perimetro = 4 * lado;
    alert(`El perímetro del cuadrado es: ${perimetro}`);
}
function celsiusToFahrenheit() {
    let celsius = parseInt(prompt("Ingrese la temperatura en grados Celsius: "));
    let fahrenheit = (celsius * 9 / 5) + 32;
    alert(`${celsius} grados Celsius equivalen a ${fahrenheit} grados Fahrenheit`);
}

function fahrenheitToCelsius() {
    let fahrenheit = parseInt(prompt("Ingrese la temperatura en grados Fahrenheit: "));
    let celsius = (fahrenheit - 32) * 5 / 9;
    alert(`${fahrenheit} grados Fahrenheit equivalen a ${celsius} grados Celsius`);
}

function minimoDosNumeros() {
    let num1 = parseInt(prompt("Ingrese el primer número: "));
    let num2 = parseInt(prompt("Ingrese el segundo número: "));
    let minimo = (num1 < num2) ? num1 : num2;
    alert(`El mínimo entre ${num1} y ${num2} es: ${minimo}`);
}