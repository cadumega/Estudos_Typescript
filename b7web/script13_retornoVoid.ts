// Uma função cumpre o papel dela, recebe os parametros. Mas ela não tem nenhum tipo de retorno.
// Como remover um elemento da tela por exemplo:

function removerElemento(el: HTMLElement): void {
    el.remove();
}

removerElemento( document.getElementById('teste'));  


// Colocou o void não precisa colocar o retorno. return; serve para parar a aplicação em alguns casos.

type QualquerFuncao = () => void;

const algo: QualquerFuncao = () => {
    return 12;
}

// não é armazenado nenhum tipo de retorno em variavel.


//Aqui não posso colocar para retornar nada.
const blabla = (): void => {

}
