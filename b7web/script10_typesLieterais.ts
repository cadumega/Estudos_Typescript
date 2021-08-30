function mostrarTexto(
    texto: string, 
    alinhamento: 'left' | 'right' | 'center' 
    ) {
    return `<div style='text-align: ${alinhamento}">${texto}</div>`
}

mostrarTexto('Carlos', 'left')
mostrarTexto('Carlos', 'right')
mostrarTexto('Carlos', 'center')


// ex2
type VerdadeiroOuFalso = true | false;

function temNome(nome:string): VerdadeiroOuFalso {
    if(nome !== '') {
        return true;
    } else {
        return false;
    }
}

// ex3
type Opcoes = {
    width: number,
    heigth: number
}

function configurar(props: Opcoes | 'auto') {                //{width:number, height: number} | 'auto')

}

configurar ({width:100, heigth:200});
configurar('auto');
configurar('automatico');