// Explicando o pq o type se comportou em determinadas situações.
// Entendendo a variavel como number ou string.

let names = ['carlos', 'carol', 'pedro', 'cristina',90];

names.forEach(function(nome) {
    console.log(nome.toUpperCase()); 
});

/*
names.forEach( function(nome){
    if(typeof nome === 'string') {
        console.log(nome.toUpperCase());
    } else {
        console.log(nome);
    }
});
*/

