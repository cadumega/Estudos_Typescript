type NomeCompleto = string;

let nome: NomeCompleto = 'Bonieky';

// Usamos o type qd queremos simplificar e organizar o código, replicável em outras partes do código.

type Idade = string | number;
let idade: Idade = 90;

function mostrarIdade(i:Idade): Idade {
    return i;
}

// ex2

type User = {               // type não é alteravel, não consigo aumentar
    nome:string,
    idade:number
}

interface User2 {            // consigo adicionar novos itens com Interface
    nome: string;
    idade:number;
}

function resumo(usuario:User) {                 //(usuario: {nome: string, idade: number})
    return `Olá ${usuario.nome}, você tem ${usuario.idade} anos.`
}

resumo({
    nome:'Carlos',
    idade:90
})

// ex3

