//-------------------------------DESAFIO COMPLEMENTARIO----------------------------
//------------------------------FUNCIONES-------------------------------
//-------------------------PRIMER EJERCICIO--------------------------------
// alert("necesitas ceramica? estas en el lugar ideal")
function metrajepiso(metrajeCantidad, operacion, ceramicaMedida) {
    switch (operacion) {
        //se puede agregar otras operaciones, sin embargo para el metraje solo se necesita la operacion division
        case "/":
            return metrajeCantidad / ceramicaMedida;
            break;
        default:
            return 0;
            break;
    }
}
console.log(metrajepiso(10, "*", 5));
let valor1 = parseFloat(prompt("Ingrese la cantidad de metros que necesitas"));
let valor2 = parseFloat(prompt("si la ceramica es de 45cm x 45cm escribe: 2.03 \nsi es de 60 x 60cm escribe: 1.44"));
let ope = prompt("Para conocer las cajas que necesitas ingresa /");
let resultadoFinal = metrajepiso(valor1, ope, valor2);
alert("necestas " + resultadoFinal + " cajas");

//------------------------SEGUNDO EJERCICIO---------------------------------------
//--------------conociendo el precio a pagar para pintar zonas de la casa por metro-----------
alert("Quieres pintar tu casa y no sabes cuanto te cobraran por metro cuadrado? El precio es de  16m2")
function metrajeSala(){
    const sala = parseInt(prompt('Ingrese el metraje de la sala a pintar'));
    return sala;
}

function metrajeComedor(){
    const comedor = parseInt(prompt('Ingrese el metraje del comedor a pintar'));
    return comedor;
}

function metrajeCocina(){
    const cocina = parseInt(prompt('Ingrese el metraje de la cocina a pintar'));
    return cocina;
}

function sumar(sala, comedor, cocina){
    const suma = sala + comedor + cocina;
    return suma;
}

function multiplicarTres(cantidad){
    const promedio = cantidad*16;//16 es el costo del metro de mano de obra
    return promedio;
}

console.log(multiplicarTres(sumar(metrajeSala(), metrajeComedor(), metrajeCocina())));
// es otra forma de escribir las operaciones:
// const primerNumero = metrajeSala();
// const segundoNumero = metrajeComedor();
// const tercerNumero = metrajeCocina();

// const sumaDeNumeros = sumar(primerNumero, segundoNumero, tercerNumero);

// const promedioDeNumeros = multiplicarTres(sumaDeNumeros);

// console.log(promedioDeNumeros);



//----------------TERCER  EJERCICIO----------------------
//sacar la liquidacion de un productos con porcentanje de descuento
alert("¡GRAN LIQUIDACION, HASTA 80% DSCTO!")
function liquidacion(precio, porcentaje){
    return precio - ((precio * porcentaje)/100)
}
for (let index = 0; index < 5; index--) {
    let resultado = liquidacion(parseFloat(prompt("INGRESAR PRECIO DEL PRODUCTO ADQUIRIDO"))
  ,parseFloat(prompt("INGRESAR % PARA SU DESCUENTO")));
    alert("LLEVATELO AL SUPER PRECIO DE: " + resultado + " SOLES");
}

