//Declaracion de variables
let num1 = 0;
let num2 = 0;
let opera;

//Función que coloca el número presionado
function darNumero(numero){
    num1 = num1 === 0 && num1 !== '0.' ? numero : num1 + numero;
    refrescar();
}

//Función que coloca la coma al presionar dicho botón
function darComa(){
    num1 = num1 === 0 ? '0.' : num1.indexOf('.') === -1 ? num1 + '.' : num1;
    refrescar();
}

//Función que coloca la C al presionar dicho botón
function darC(){
    num1 = num2 = 0;
    refrescar();
}

//Esta función realiza las distintas operaciones aritméticas en función del botón pulsado
function operar(valor){
    if (num1 === 0){
        num1 = parseFloat(document.getElementById("valor_numero").value);
    }
    num2 = parseFloat(num1);
    num1 = 0;
    opera = valor;
}

//Función para pulsar igual
function esIgual(){
    num1 = parseFloat(num1);
    let resultado;
    switch (opera){
        case 1:
            resultado = num2 + num1;
            guardarOperacion(`${num2} + ${num1} = ${resultado}`);
            break;
        case 2:
            resultado = num2 - num1;
            guardarOperacion(`${num2} - ${num1} = ${resultado}`);
            break;
        case 3:
            resultado = num2 * num1;
            guardarOperacion(`${num2} * ${num1} = ${resultado}`);
            break;
        case 4:
            resultado = num2 / num1;
            guardarOperacion(`${num2} / ${num1} = ${resultado}`);
            break;
        case 5:
            resultado = Math.pow(num2, num1);
            guardarOperacion(`${num2} ^ ${num1} = ${resultado}`);
            break;
        case 6:
            resultado = num2 * num1 / 100;
            guardarOperacion(`${num2} % ${num1} = ${resultado}`);
            break;
    }
    num1 = resultado;
    refrescar();
    actualizarLogOperaciones();
    num2 = parseFloat(num1);
    num1 = 0;
}

function refrescar(){
    document.getElementById("valor_numero").value = num1;
}

// Función para guardar la operación en el Local Storage
function guardarOperacion(operacion) {
    // Obtener el log de operaciones del Local Storage
    let logOperaciones = JSON.parse(localStorage.getItem('logOperaciones')) || [];
    
    // Añadir la nueva operación al log
    logOperaciones.push(operacion);
    
    // Guardar el log actualizado en el Local Storage
    localStorage.setItem('logOperaciones', JSON.stringify(logOperaciones));
}

function actualizarLogOperaciones() {
    // Obtener el log de operaciones del Local Storage
    let logOperaciones = JSON.parse(localStorage.getItem('logOperaciones')) || [];
    
    // Obtener el elemento de la página para el log de operaciones
    let logOperacionesElemento = document.getElementById('logOperaciones');
    
    // Actualizar el input con el log de operaciones
    logOperacionesElemento.value = logOperaciones.join('\n');
}

// Función para resetear las operaciones
function resetOperaciones() {
    // Limpiar el log de operaciones en el Local Storage
    localStorage.setItem('logOperaciones', JSON.stringify([]));
    
    // Actualizar el input con el log de operaciones
    actualizarLogOperaciones();
}
