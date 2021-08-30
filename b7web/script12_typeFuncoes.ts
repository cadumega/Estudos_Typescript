// Quase como um interface

// padronização de type
type MathFunction = (n1: number , n2: number) => number           // Toda fç de matematica precisa ter n1 ,n2 e o retorno é number


const somar:MathFunction = ( n1, n2) => {                // => implementacao de retorno   // a implementação da fç esta seguidno o type MathFunction
    return n1 + n2
}

const subratrair: MathFunction = (n1,n2) => {
    return n1 - n2;
}

const multiplicar: MathFunction = (n1, n2) => {
    return n1 * n2;
}

const dividir: MathFunction = (n1, n2) => {
    return n1 / n2;
}