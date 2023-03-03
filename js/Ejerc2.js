// let arr1=[];
// for (let i = 0; i < 5; i++) {
//     //arr1.push(Math.round(Math.random(1,10)*10));
//     arr1.push((Math.random(1,10)*10).toFixed(0));
//     return arr1
// }
// alert(arr1)


let array = [1,2,3,4,5,6]
let i=0
console.log("while")
while (array.length>i){
    console.log(array[i])
    i+=1  
}

console.log("for")
for (i=0;i<array.length;i++){
    console.log(array[i])
}

console.log("suma")
var suma = array.map(function(x) {
    console.log(x + 1)
    return x + 1;
});

console.log("Copia")
console.log(suma)

console.log("Cuadrado")
array.map(function(x) {
    console.log(x ** 2)
});

let array1 = [1, -4, 12, 0, -3, 29, -150]
let sumaPos =0
console.log("Suma positivos")
array1.map(function(x) {
    if(x>0){sumaPos+=x}
    
});
console.log(sumaPos);

console.log("Apellido más de 6")
let array2 = ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"]
console.log(array2.filter(p => p.length > 6))

console.log("Apellido con M")
console.log(array2.filter(p => p=p.toLocaleLowerCase().startsWith("m")))

console.log("Apellido todo en mayus")
let Mayus = array2.map(function(nombre) {
    return nombre.toUpperCase();
  });
  
console.log(Mayus);

let array3 = ["azul", "amarillo", "rojo", "verde", "café", "rosa"]
let color =prompt("Ingrese un color en minusculas Ej: rojo ")

console.log(array3.some(n => n === color))