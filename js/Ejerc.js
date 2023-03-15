

const inicio = document.getElementById('inicio');
inicio.addEventListener('click', () => {
    menu();
})

function menu() {
    let link = 'https://dandelion-rocket-d56.notion.site/Ejercitacion-JS-b041fe1fc5b64fdabe03104343119a92';
    num = parseInt(prompt(`Elejir ejercicios del 1 al 26 referencia al link en la pantalla: \n${link}`))
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
            perimetroCuadrado()
            break;
        case 13:
            celsiusToFahrenheit()
            break; 
        case 14:
            fahrenheitToCelsius()
            break;
        case 15:
            maximoDosNumeros()
            break; 
        case 16:
            minimoDosNumeros()
            break;
        case 17:
            maximo3Num()
            break; 
        case 18:
            minimo3Num()
            break;
        case 19:
            parImpar()
            break; 
        case 20:
            posNegCero()
            break;
        case 21:
            longitud()
            break; 
        case 22:
            mayus()
            break; 
        case 23:
            minus()
            break;
        case 24:
            sumaNPar()
            break; 
        case 25:
            sumaNImpar()
            break;
        case 26:
            raiz()
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

function maximoDosNumeros() {
    let num1 = parseInt(prompt("Ingrese el primer número: "));
    let num2 = parseInt(prompt("Ingrese el segundo número: "));
    let maximo = (num1 > num2) ? num1 : num2;
    alert(`El maximo entre ${num1} y ${num2} es: ${maximo}`);
}

function minimoDosNumeros() {
    let num1 = parseInt(prompt("Ingrese el primer número: "));
    let num2 = parseInt(prompt("Ingrese el segundo número: "));
    let minimo = (num1 < num2) ? num1 : num2;
    alert(`El mínimo entre ${num1} y ${num2} es: ${minimo}`);
}

function maximo3Num(){
    let num1 = parseInt(prompt("Ingrese el primer número: "));
    let num2 = parseInt(prompt("Ingrese el segundo número: "));
    let num3 = parseInt(prompt("Ingrese el tercer número: "));
    let maximo = Math.max(num1,num2,num3)
    alert(`El maximo entre ${num1}, ${num2} y ${num3} y es: ${maximo}`);
}

function minimo3Num(){
    let num1 = parseInt(prompt("Ingrese el primer número: "));
    let num2 = parseInt(prompt("Ingrese el segundo número: "));
    let num3 = parseInt(prompt("Ingrese el tercer número: "));
    let minimo = Math.min(num1,num2,num3)
    alert(`El maximo entre ${num1}, ${num2} y ${num3} y es: ${minimo}`);
}

function parImpar(){
    let num1 = parseInt(prompt("Ingrese el primer número: "));
    if(num1%2==0){
        alert(`El valor ${num1} es par`)
    }else{
        alert(`El valor ${num1} es impar`)
    }
}

function posNegCero(){
    let num1 = parseInt(prompt("Ingrese el primer número: "));
    if(num1==0){
        alert(`El valor ${num1} es Cero`)
    }else if(num1>0){
        alert(`El valor ${num1} es Positivo`)
    }else{
        alert(`El valor ${num1} es Negativo`)
    }
}

function longitud(){
    let text = prompt("Ingrese una cadena de texto: ").length();
    alert(`Longitud de una cadena de texto es: ${text}`)   
}

function mayus(){
    let text = prompt("Ingrese una cadena de texto: ").toLocaleUpperCase();
    alert(`Texto en mayusculas: ${text}`)   
}

function minus(){
    let text = prompt("Ingrese una cadena de texto: ").toLocaleLowerCase();
    alert(`Texto en mayusculas: ${text}`)   
}

function sumaNPar(){
    let num1 = parseInt(prompt("Ingrese un número: \nse sumara los pares hasta llegar a el: "));
    let resp
    for(i=0;i<=num1;i+2){
        resp=resp+i
    }
    alert(`El valor de la sumatoria de pares es: ${num1}`)
}

function sumaNImpar(){
    let num1 = parseInt(prompt("Ingrese un número: \nse sumara los pares hasta llegar a el: "));
    let resp
    for(i=1;i<=num1;i+2){
        resp=resp+i
    }
    alert(`El valor de la sumatoria de impares es: ${num1}`)
}

function raiz(){
    let num1 = parseInt(prompt("Ingrese un número se calculara la raiz: "));
    num1=Math.sqrt(num1);
    alert(`El valor de la raiz es: ${num1}`)
}