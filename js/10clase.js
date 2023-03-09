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
    const email= "rastictac@gmail.com"
    const clave= 1234
    var modal = document.getElementById("exampleModal")
    var datos = []
    fetchDolarHoy();

     async function fetchDolarHoy() {
          try {
          const response = await fetch('https://api.codetabs.com/v1/proxy?quest=https://dolarhoy.com/cotizaciondolarblue');
          const html = await response.text();
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
          const ventaElement = doc.querySelector('#sitio > section > div > div.cotizacion_moneda > div.tile.is-ancestor.is-vertical > div.tile.cotizacion_value > div.tile.is-parent.is-8 > div:nth-child(2) > div.value');
          venta = parseFloat(ventaElement.textContent.trim().replace('$', '').replace('.', ','));
          console.log("Venta: "+venta)
          document.querySelectorAll("#dolarHoy")[0].innerText = venta
          } catch (error) {
          console.error(error);
          }
      }
    


      
///////////////////////////


    function obtenerDatos(emailIngresado, claveIngresada){
        emailIngresado = document.getElementById("emailEntrada").value
        claveIngresada = document.getElementById("claveEntrada").value
        datos.push(emailIngresado,claveIngresada)
        console.log(datos)
        if(email== datos[0]&&clave == datos[1]){
            alert("Bienvenido")
            setTimeout(ocultarVentana,5000)

        }else{
            alert("mal")
            setTimeout(actualizar,1000)
        }
    }

    let ocultarVentana = () => {
        modal.style.display="none"
        
    }
    let actualizar = () => {
        location.reload()
    }



    let boton = document.getElementById("login")
    boton.addEventListener("click",obtenerDatos)

    var miBoton = document.getElementById('modal');
    miBoton.addEventListener('click', function() {
        event.preventDefault();
        var myModal = new bootstrap.Modal(document.querySelector('#exampleModal'))
        myModal.show();
    });

