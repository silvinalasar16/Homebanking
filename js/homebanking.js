//Declaración de variables
var nombreUsuario = "Federico García";
var saldoCuenta = 9300;
var limiteExtraccion = 2500;


//Ejecución de las funciones que actualizan los valores de las variables en el HTML
cargarNombreEnPantalla();
actualizarSaldoEnPantalla();
actualizarLimiteEnPantalla();

//Funciones que tenes que completar
function incrementarSaldo(cantDinero) {
  var suma= saldoCuenta + cantDinero;
  return (suma);
}

function disminuirSaldo(cantDinero){
  var resta= saldoCuenta - cantDinero;
  return (resta);
}

function cambiarLimiteDeExtraccion() {
  var limite = prompt('Hola '+nombreUsuario +  '. Ingrese el nuevo límite de extacción que desea.');
  var limiteExt = parseInt(limite);

    alert(' Limite de Extracción: $ ' + limiteExt  + '\n Límite de extracción anterior: $ ' + limiteExtraccion);

  limiteExtraccion=limiteExt;
    actualizarLimiteEnPantalla();
  }


function extraerDinero(cantDinero) {
  var ext = prompt('Hola '+nombreUsuario +  '. Cuánto dinero desea retirar.');
  var extraccion = parseInt(ext);
  var saldoActual = disminuirSaldo(extraccion);

  if(extraccion <= limiteExtraccion){

        alert(' Dinero extraído: $ ' + extraccion  + '\n Saldo anterior: $ ' + saldoCuenta  + '\n Saldo actual: $ '+ saldoActual);
      saldoCuenta=saldoActual;
        actualizarSaldoEnPantalla();
      } else {
        alert('La cantidad de dinero que desea extraer es mayor al limite de extracción.');
      }
    }
    

function depositarDinero(cantDinero) {
  var dep = prompt('Hola '+nombreUsuario +  '. Cuánto dinero desea depositar.');
  var deposito = parseInt(dep);
  var saldoActual = incrementarSaldo(deposito);

    alert(' Dinero depositado: $ ' + deposito  + '\n Saldo anterior: $ ' + saldoCuenta  + '\n Saldo actual: $ '+ saldoActual);

  saldoCuenta=saldoActual;
    actualizarSaldoEnPantalla();
  }

function pagarServicio(cantDinero, servicio) {
  var servicios= ['Agua', 'Luz', 'Gas', 'Telefonía', 'Tarjeta de Crédito'];
  for(var pago = 0; pago < servicios.length; pago++){

  }

}

function transferirDinero() {
  var transf = prompt('Hola '+nombreUsuario +  '. Cuánto dinero desea transferir.');
  var transferencia = parseInt(transf);
  var saldoActual = disminuirSaldo(tranferencia);

    alert(' Dinero transferido: $ ' + transferencia  + '\n Saldo anterior: $ ' + saldoCuenta  + '\n Saldo actual: $ '+ saldoActual);

  saldoCuenta=saldoActual;
    actualizarSaldoEnPantalla();
}

function iniciarSesion() {

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
