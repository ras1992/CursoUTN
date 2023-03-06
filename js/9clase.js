let h1 = document.getElementsByTagName("h1")
for (let i = 0; i < h1.length; i++) {
    console.log(h1[i].innerHTML);
  }
  let f1 =document.querySelectorAll(".clase") 
  //trae todo clase/id/etc  
  //querySelectorAll(".clase")[0] << para seleccionar
  document.querySelectorAll(".h1")[0].innerText ="Bienvenidos a Azkaban"
  //cambiar el titulo


  let p = document.querySelector("p");

  let cambio = document.querySelector("#cambio");
  cambio.style.backgroundColor = "rgb(255,255,2)";
  
  function ras(color) {
    p.style.backgroundColor = `${color}`;
    cambio.style.backgroundColor = `${color}`;
  }
  
  cambio.addEventListener("click", () => ras("rgb(25, 23, 25)"));

///////////////////////////////////


// cambiar onclick con la toma de evento de js

  function datosPersonales(){
    var nombre = document.getElementById("nombre").value;
    var edad = parseInt(document.getElementById("edad").value);
    var dni = document.getElementById("dni").value;
    
    console.log("Nombre: " + nombre);

    if (edad>100){
        var respuesta = confirm("¿Es correcto que tenga mas de 100 años viejo?")

        if (respuesta) {
            alert("Usted aceptó.");
            console.log("Edad: " + edad);
        }
        else {
            alert("Usted no aceptó.");
        }
    } 
    if (dni.length>8){
        alert("Su dni no esta correctamente escrito supera los 8 digitos\n Su Dni no sera procesado");
    }else{
        console.log("DNI: " + dni);
    }

    borrarDatosPersonales()
  }

  function borrarDatosPersonales(){
    document.getElementById("nombre").value= "";
    document.getElementById("edad").value= "";
    document.getElementById("dni").value= "";
  }


  function suma(){
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    n1=n1+n2
    alert("La suma de los 2 valores es: "+ `${n1}`);
    borrarDatosSuma()
  }

  function borrarDatosSuma(){
    document.getElementById("n1").value="";
    document.getElementById("n2").value="";
  }