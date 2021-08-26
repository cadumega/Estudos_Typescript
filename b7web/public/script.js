//Serve para desenvolver, não irá para publico.
var numero1 = document.getElementById('numero1'); // se comporta ocmo um element de input do HTML 
var numero2 = document.getElementById('numero2');
var botao = document.getElementById('calcular');
var res = document.getElementById('resultado');
function calcular(n1, n2) {
    return n1 + n2;
}
botao.addEventListener('click', function () {
    res.innerHTML = calcular(+numero1.value, +numero2.value).toString(); // transformo em string
});
// Preciso converter ele para testar
//tsc script.ts --noEmitOnError
