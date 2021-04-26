/*
 * É feita uma importação do Express (framework)
 * na variável express
 */
const { request, response } = require('express');
const express = require('express');

/*
 * Depois atribui express a 'app'
 * (aparentemente inicializa o aplicativo)
 */
const app = express();

/*
 * Nesse ponto atual, simplesmente acessar o endereço não 
 * retorna nada, pois a aplicação não verifica o que está sendo
 * acessado, e qual a rota, nesse caso por exemplo: 'localhost:6000/inicio'
 * Para isso usa-se um método do Express, o .get 
 */

 /* 
  * O primero parâmetro é o endereço a ser observado
  * como por exemplo '/usuarios'
  * Já o segundo é uma função (foi usado uma 'arrow function')
  * onde o primeiro parâmetro dessa função é request (requisição)
  * e o segundo, response (resposta) 
  */

 // A URL monitorada pode ser somente '/' que monitora todos as rotas
app.get('/home',(request, response) =>{
 /* 
  * Essa resposta gerada pode ser várias coisas permitidas
  * (texto, arquivos, JSON, etc...)
  * e é enviada para o front-endpelo objeto response 
  */
    // É definido um retorno dessa rota ao navegador
    // response.send retorna texto
    return response.send("Olá Mundinho!\n");
    
});

//Um segundo exemplo
app.get('/users',(request, response) =>{
    /* 
     * Essa resposta gerada pode ser várias coisas permitidas
     * (texto, arquivos, JSON, etc...)
     * e é enviada para o front-endpelo objeto response 
     */
       // É definido um retorno dessa rota ao navegador
       // response.send retorna texto
       return response.json({
           message : "Só tem eu aqui",
           name : "André Luiz",
           age : 21,
           mentaWellness : "A beira do surto"
       });
       
   });
   

/*
 * Permite que o 'escute' pela porta 
 * especificada, assim possível acessar pelo
 * navegador, usando no caso: localhost:porta
 * É possível adicionar um segundo parâmetro, como
 * uma função que é executada em caso de sucesso na
 * inicialização do script
 */
app.listen(6000, () => {
    console.log("Programa Iniciado com Sucesso ✅");
});

/* 
  * Após isso é necessário rodar o programa com
  * $ node nome_programa.js 
  */