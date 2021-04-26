const { request, response } = require('express');
const express = require('express');

//Necesário instalar pacote uuid
const uuid = require('uuid')

const app = express();

app.use(express.json());

//Vetor de Projetos
const projects = [];

app.get('/projects', (request, response) => {

   // Apenas lista todos projetos
    return response.json(projects);

});

//Request Body
app.post('/projects', (request, response) => {

    //Recebe os dados do projeto e cria o mesmo
    const { name, year, owner } = request.body;
 
    //id recebe a função uuid()
    const project = {id: uuid.v4(), name, year, owner };

    projects.push(project);
    
    //retorna o projeto recém criado
    return response.json(project);

});

//Route Paramater 
app.put('/projects/:id', (request, response) => {

    // Atualização de projeto
    //Recebe os dados para atualização
    const { name, year, owner } = request.body;
 
    //Obtém um ID de projeto da URL
    const { id } = request.params;

    /**
     * Cria-se uma variável project
     * Usando o método .find do vetor,
     * a variável project recebe o projeto
     * caso o atributo ID seja igual o atributo
     * passado.
     *  
     * const project = projects.find(project => project.id === id);
     * 
     * Contudo é interessante receber o índice (index)
     * do objeto em vez dele em si, pois fica mais fácil
     * modificação bem como o retorno de não encontrado que
     * é -1
     */
     const projectIndex = projects.findIndex(project => project.id === id);

     if (projectIndex < 0) {
        //Retorna mensagem de erro
        //O status retorna um status HTTP
        return response.status(400).json({
            Error : "Project Not Found!"
        });
     }
     else{
         console.log("Entrou no else")
         //Atribui os dados recebidos a uma variável
        const project = {
            id,
            name,
            year,
            owner
        }
        // Atualiza na parte específica do vetor
        projects[projectIndex] = project;

        //Nunca esqueça do retorno kkkkkkkkkkkkk
        return response.json(project);
     }
});


//Remover
app.delete('/projects/:id', (request, response) => {
    //É semelhante a alteração
      
    const { id } = request.params;

    const projectIndex = projects.findIndex(project => project.id === id);
  
       if (projectIndex < 0) {
          //Retorna mensagem de erro
          //O status retorna um status HTTP
          return response.status(400).json({
              Error : "Project Not Found!"
          });
       }
       else{

        /**
         * O método slice dos arrays removem
         * itens começando no índice (parâmetro 1)
         * e na quantidade indicada no parâmetro 2
         * 
         * Nesse caso foi usado 1, para remover somente
         * o vetor indicado.
         */
          projects.splice(projectIndex, 1);
  
          //Para retorno pode ser usado apenas send(vazio)
          //Interessante usar status 204
          return response.status(204).send();
       }
});


/* Alternativa para GET com suporte a Query */

// app.get('/projects', (request, response) => {

/* Atribui os itens da query a uma variável*/
//  const {name} = request.query;

//   const results = name

/* Usando operador ternário */

//    ? projects.filter(project => project.name.includes(name))
//   : projects;

//    return response.json(results);
// });

app.listen(6000, () => {
console.log("Aplicação iniciada com Sucesso ✅");
});
