// Parametros de funções
/* Função que 1° letra será Maisculo, irei receber um nome como param
1° Pegar a primeiira letra, depois jogo a primeira letra para maisculo, e depois retorno a primeira letra em diante
2° Transformar o nome em que cada letra é uma array
*/ 


function firstLetterUpperCase(name: string) {           // typescript não identificou o param name, se eu não fizer a tipagem . (name: string, age: number) 
    let firstLetter = name.charAt(0).toUpperCase();
    return firstLetter+name.substring(1);               //return `${firstLetter}${name}`.substring(1);  //O método substring() retorna a parte da string entre os índices inicial e final, ou até o final da string. 
}

let nome = firstLetterUpperCase('carlos');




//ex2

function somar(n1:number, n2:number):number {           // Esse 3° number é referente ao retorno. type de retorno.
    return n1 + n2;
}

let alguma = somar(90, 15);