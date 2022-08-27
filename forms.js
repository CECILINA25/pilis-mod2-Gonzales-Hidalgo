function onClick (event) {
    event.preventDefault();
    //this.style.backgroundColor = "black";
    console.log("click...");
    console.log(event);
    const mensaje = {
      nameComercio: document.getElementById('nameComercio').value,
      nameTitular: document.getElementById('nameTitular').value,
      telefono: document.getElementById('telefono').value
    }
    console.log(mensaje);
  
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(mensaje),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => { 
          console.log(json);
          Swal.fire(
              'Enviado',
              'Gracias por tu  participación',
              'success'
          );
          cleanForm();
          /* redirectUrl(); */
      })
      .catch((err) => console.log(err)); 
  
  }
  


  function cleanForm() {
    let formulario = document.getElementById('formulario');    
    formulario.reset();    
}
function redirectUrl(){
    window.location.href = "https://google.com";    
}


// ACCIONAR BOTON ENVIAR
let boton = document.getElementById("enviar");
boton.addEventListener("click", onClick);


