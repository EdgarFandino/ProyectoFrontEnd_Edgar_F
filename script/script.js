// Backend contacto

function saveForm(){

    let nombreForm = document.getElementById("nombre");
    let identificacionForm = document.getElementById("identificacion");
    let correoForm = document.getElementById("correo");
    let telefonoForm = document.getElementById("telefono");
    let empresaForm = document.getElementById("empresa");
    let mensajeForm = document.getElementById("mensaje");

    let formula = {
        nombre: nombreForm.value,
        identificacion: identificacionForm.value,
        correo: correoForm.value,
        telefono: telefonoForm.value,
        empresa: empresaForm.value,
        mensaje: mensajeForm.value
    }

    console.log(formula);



let url = "http://127.0.0.1:8000/api/fullstackC";
let params = {
    method: "POST",
    headers:{
        "Content-Type": "application/json"
    },
    body: JSON.stringify(formula),
}

fetch(url,params).then((response) =>{

    console.log(response);
    console.log(response.json());

    if(response.status == 201){
        alert("Envio exitoso de datos!!!");
    }else{
        alert("Error en el envio de datos!!!");
    }
});

return true;

}
