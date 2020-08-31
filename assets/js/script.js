//obteniendo el formulario desde el ID:
var formulario = document.getElementById("form");

//Validaciones se realizan al momento de hacer clic en el boton tipo submit:
formulario.addEventListener("submit", e => {
    //Obtengo los datos desde el ID del elemento 
    var rut = document.getElementById("rut").value;
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var edad = document.getElementById("edad").value;
    var correo = document.getElementById("correo").value;
    var especialidad = document.getElementById("especialidad").value;
    var fecha = document.getElementById("fecha").value;
    var hora = document.getElementById("hora").value;
    var result = "Estimado(a) " + nombre + " " + apellidos + ", " + "su hora para " + especialidad + " ha sido reservada para el día " + fecha + " a las " + hora + "." + "Además, se le envió un mensaje a su correo " + correo + " con el detalle de su cita. Gracias por preferirnos.";




    //Evitar que envie el formulario
    e.preventDefault();

    //Comprobando: si la validacion es falsa, retorna falso. Si es verdadera pasa a la siguiente.
    if (validaRut() == false) {
        return false;
    } else if (validaNombre() == false) {
        return false;
    } else if (validaApellidos() == false) {
        return false;
    } else if (validaEdad() == false) {
        return false;
    } else if (validaEmail() == false) {
        return false;
    } else if (especialidad === "0") {
        return ("Por  favor, seleccione la especialidad.");
    } else if (validaFecha() == false) {
        return false;
    } else if (hora === "0") {
        return ("Por favor, ingrese la hora en que agendará su cita médica.");
    } else {
        alert(`${result}`);


        limpiar();
    }
});


// 1. validar formato rut (válidos 10.943.321-k  && 10943321-k)

validaRut = () => {
    var rut = document.getElementById("rut").value;
    var expresionRut = /^0*(\d{1,3}(\.?\d{3})*)\-?([\dkK])$/gim;
    //var expresion = /^\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}$/gm;
    //var expresion = /^\d{1,2}\.\d{3}\.\d{3}[-][\dkK]{1}$/gm;
    if (rut === "") {
        alert("Por favor, ingrese su rut");
        return false;
    } else if (!expresionRut.test(rut)) {
        alert("El rut ingresado no es válido. Debe tener un formato similar a 10.943.321-k");
        return false;
    }
};
//validaRut();


//2. validar nombres, apellidos, (que solo contengan letras)
//indica que los caracteres admitidos son letras del alfabeto, mayúsculas o minúsculas (case insensitive)

//2.a validar nombre
validaNombre = () => {
    var nombre = document.getElementById("nombre").value;
    var expresionLetras = /^[A-Z]+$/i;
    if (nombre === "") {
        alert("Por favor, ingrese su nombre");
        return false;
    } else if (!expresionLetras.test(nombre)) {
        alert("El campo nombre sólo acepta letras");
        return false;
    }
};
//validaNombre();

//2.b validar apellidos

validaApellidos = () => {
    var apellidos = document.getElementById("apellidos").value;
    var expresionLetras = /^[A-Z]+$/i;
    if (apellidos === "") {
        alert("Por favor, ingrese su apellido");
        return false;
    } else if (!expresionLetras.test(apellidos)) {
        alert("El campo apellidos sólo acepta letras");
        return false;
    }
};
//validaApellidos();

//3. validar edad (que solo ingrese números)

validaEdad = () => {
    var edad = document.getElementById("edad").value;
    var expresionEdad = /^(\d{1}|\d{2})$/g;
    if (edad === "") {
        alert("Por favor, ingrese su edad");
        return false;
    } else if (!expresionEdad.test(edad)) {
        alert("El campos edad solo acepta números");
        return false;
    }
};
//validaEdad();

//4. validar formato email
//indica que debemos usar palabra@palabra.letras[a-z]

validaEmail = () => {
    var correo = document.getElementById("correo").value;
    var expresion = /\w+@\w+\.+[a-z]{2,4}/;
    if (correo === "") {
        alert("Por favor, ingrese su e-mail");
        return false;
    } else if (!expresion.test(correo)) {
        alert("El correo no es válido. Debe tener un formato similar a mi.email[@]desafio-latam[.]cl");
        return false;
    }
};
//validaEmail();

//5. validar formato fecha dd-mm-yyyy

validaFecha = () => {
    var fecha = document.getElementById("fecha").value;
    var expresionFecha = /([0-2]+[0-9]|3+[0-1])(\-)(0+[1-9]|1+[0-2])(\-)(\d{4})/;
    if (fecha === "") {
        alert("Por favor, ingrese su la fecha en que agendará su hora médica.");
        return false;
    } else if (!expresionFecha.test(fecha)) {
        alert("La fecha ingresada no es válida. Debe tener un formato similar a dd-mm-yyyy");
        return false;
    }
};
//validaFecha();



///**** limpia campos de texto luego de validar formulario
limpiaInput = () => {
    var rut = document.getElementById("rut");
    var nombre = document.getElementById("nombre");
    var apellidos = document.getElementById("apellidos");
    var edad = document.getElementById("edad");
    var correo = document.getElementById("correo");
    var especialidad = document.getElementById("especialidad");
    var fecha = document.getElementById("fecha");
    var hora = document.getElementById("hora");


    rut.value = "";
    nombre.value = "";
    apellidos.value = "";
    edad.value = "";
    correo.value = "";
    especialidad.value = "0";
    fecha.value = "";
    hora.value = "0";
}

success = () => {
    var result = "Estimado(a) " + nombre + " " + apellidos + ", " + "su hora para " + especialidad + " ha sido reservada para el día " + fecha + " a las " + hora + "." + "Además, se le envió un mensaje a su correo " + correo + " con el detalle de su cita. Gracias por preferirnos.";
};