let codigo: string | number = 90;         // pode ser uma string ou number que o typescript ira aceitar

codigo = document.getElementById('idade').innerHTML;



//ex2
function mostrarIdade(idade: string | number) {
                                                                // console.log(`Minha idade é: ${idade}`);
    if(typeof idade ==='string') {
        console.log(idade.toUpperCase());
    }else {
        console.log(idade);
    }
}

mostrarIdade(90);
mostrarIdade('90');
