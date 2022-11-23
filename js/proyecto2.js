let contador = 0;

const valor = document.getElementById ("valor");
const btnincrementar = document.getElementById("incrementar");
const btndecrementar = document.getElementById( "decrementar");
const resetear = document.getElementById( "resetear");

btnincrementar.onclick = function () {contador++; valor.innerHTML = contador; }
btndecrementar.onclick = function () {contador--; valor.innerHTML = contador; }
resetear.onclick = function () {contador = 0 ; valor.innerHTML = contador; }