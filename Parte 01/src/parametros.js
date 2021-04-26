const { request, response } = require('express');
const express = require('express');
const app = express();
/**
 * Permite que o Express 'entenda' JSON
 * Deve ser declarado antes de qualquer rota
 * Mais INFO https://expressjs.com/pt-br/api.html
 */
app.use(express.json());


/*
* Apesar de a rota ser a mesma, o método é diferente
* assim a resposta muda
*/

//Query
app.get('/projects', (request, response) => {

    // Query Exemplo
    //http://localhost:6000/projects?name=Projeto01&year=2021

    //const query = request.query; (Pega todos)

    const { name, year } = request.query;

    console.log(name);
    console.log(year);

    return response.json([
        "Projeto 00",
        "Projeto 01",
    ]);

});

//Route Paramater 
app.put('/projects/:id', (request, response) => {

    // Rota Exemplo
    //http://localhost:6000/projects/0

    //const params = request.params; (não desmembrado)
    const { id } = request.params;

    console.log(id);

    return response.json([
        "Projeto 03",
        "Projeto 01",
        "Projeto 02",
    ]);
});


//Request Body
app.post('/projects', (request, response) => {

    // Usa-se um JSON como corpo

    /**
     * Esse método não funciona sem invocar a função
     * express.json() para app, e retorna undefinied
     * O Express não interpreta JSON por padrão
     * 
     */

    //const body = request.body; (não desmembrado)
    const { name, year } = request.body;

    console.log(name);
    console.log(year);

    return response.json([
        "Projeto 00",
        "Projeto 01",
        "Projeto 02",
    ]);
});

//DELETE Remove uma entidade
app.delete('/projects', (request, response) => {
    return response.json([
        "Projeto 01",
        "Projeto 02",
    ]);
});



app.listen(6000, () => {
    console.log("Teste de Rotas iniciado com Sucesso ✅");
});
