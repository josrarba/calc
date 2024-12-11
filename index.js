const resultado = document.getElementById('resultado');


function agregarNumero(num) {
    resultado.value += num;
}

function limpiar() {
    resultado.value = '';
}

function calcular() {
    try {
        resultado.value = eval(resultado.value);
    } catch (error) {
        resultado.value = 'Error';
    }
}

function eliminarNumero(){
    if (resultado.value.length >= 1) {
        resultado.value = resultado.value.slice(0, -1)
    } else {
        alert("no hay numeros a borrar")
        resultado.value = "0"
    }
}