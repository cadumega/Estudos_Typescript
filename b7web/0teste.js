/*

let numero1= document.getElementById('numero1');
let numero2= document.getElementById('numero2');
let botao= document.getElementById('calcular');
let res= document.getElementById('resultado');


function calcular(n1,n2) {
    if(typeof n1== 'number' && typeof n2=='number') {        // para corrigir e somar como number
    return n1+n2;                                            //52 , não veio a soma correta , veio concatenado.
} else {
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    // return n1+n2;                                        // return +n1++n2;   apago os parseInt, pq ja entende ocmo n
}}


botao.addEventListener('click', function() {                 // pega o resultado da tela
  res.innerHTML = calcular(numero1.value,numero2.value);      // cacl num 1 e num 2, passei os parametros
})
*/


//______________________________ Concatenando:
/*
function calcular(n1,n2) {
  return n1+n2;
} 


botao.addEventListener('click', function() {                 // pega o resultado da tela
res.innerHTML = calcular(numero1.value,numero2.value);      // cacl num 1 e num 2, passei os parametros
})

*/