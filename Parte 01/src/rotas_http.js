const { request, response } = require('express');
const express = require('express');
const app = express();


/*
* Apesar de a rota ser a mesma, o método é diferente
* assim a resposta muda
*/

//GET Solicita do Backend
app.get('/projects',(request, response) =>{
       return response.json([
         "Projeto 00",
         "Projeto 01",
    ]);
       
   });

//POST Submete uma entidade
app.post('/projects',(request, response) =>{
    return response.json([
      "Projeto 00",
      "Projeto 01",
      "Projeto 02",
 ]);
});

/** É necessário que seja informado um item para
 *  realizar a alteração, assím devendo ser informado
 *  na rota
 */

//PUT Altera completamente uma entidade
app.put('/projects/:id',(request, response) =>{
    return response.json([
      "Projeto 03",
      "Projeto 01",
      "Projeto 02",
 ]);
});

//DELETE Remove uma entidade
app.delete('/projects',(request, response) =>{
    return response.json([
      "Projeto 01",
      "Projeto 02",
 ]);
});
   app.listen(6000, () => {
    console.log("Teste de Rotas iniciado com Sucesso ✅");
});