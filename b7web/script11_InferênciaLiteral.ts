function fazerRequisicao(url: string, method: 'GET' | ' POST') {
    // ...
}

//let req = { url: 'https://google.com', method: 'GET'};

/*

type Methods = 'GET' | 'POST';

let url = 'https://google.com';
let method: Methods = 'GET';

fazerRequisicao(url, method)     // TS esta achando o código soft , pode ser modificado e pode dar problema, previsibilidade do TS
*/


// ex2

type RequestDetails = {
    url: string,
    method: 'GET' | 'POST'
};

let req: RequestDetails = {
    url: 'https://google.com',
    method: 'GET'
};

req.method = 'POST';

fazerRequisicao(req.url, req.method);