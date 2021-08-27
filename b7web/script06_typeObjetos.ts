// Fora os principais types, o de objeto também é o que você irá utilizar bastante
//

let dados = {
    nome: 'Carlos'
    // idade: 29,
    // outro:'abc'
};

function resumo(usuario: {nome:string, idade?:number}) {          // param usuario q tem um obj   / Qd ponho ? no type idade q não foi declarado, é uma prop opcional, pode ter ou não ter
    if (usuario.idade !== undefined) {
        return `Olá ${usuario.nome}, tudo bem? Você tem ${usuario.idade} anos`   // Se tiver a idade executa aqui // uso de propriedades do objeto,interessante colocar o type dos q vc ira usar
    } else {
        return `Olá ${usuario.nome}, tudo bem?`;
    }
}


console.log(resumo(dados));

