//Serve para desenvolver, não irá para publico.

let numero1= document.getElementById('numero1') as HTMLInputElement;        // se comporta ocmo um element de input do HTML 
let numero2= document.getElementById('numero2') as HTMLInputElement;
let botao= document.getElementById('calcular');
let res= document.getElementById('resultado');


function calcular(n1: number, n2: number) {
  return n1+n2;
} 


botao.addEventListener('click', function() {
    res.innerHTML = calcular(+numero1.value,+numero2.value).toString();      // transformo em string
})


// Preciso converter ele para testar
//tsc script.ts --noEmitOnError
//tsc script.ts --noEmitOnError --outDir public