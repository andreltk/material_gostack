const { req, res } = require('express');
const express = require('express');
const app = express();
const uuid = require('uuid')

const projects = [];

app.use(express.json());

/**
 * 
 * Um middleware segue o padrão de 
 * argumentos onde recebe um terceiro 
 * parâmetro NEXT, que indica o próximo
 * middleware a ser executado caso ele não
 * retorne algo.
 * Todas as rotas são MiddleWares, que
 * interceptamtem acesso ao objeto de 
 * solicitação (req), o objeto de resposta (res)
 */

//Exibe no console o método da requisição e URL
function logRequests(req, res, next){
    
    //Obtém método e URL
    const {method, url} = req;

    /**
     * O uso de crase permite variáveis e
     * funções em uma 'string', no caso foi
     * usado o método .toUpperCase() e as 
     * variáveis method e url que estão
     * entre ${}
     */
    const logLabel = `[${method.toUpperCase()}] => ${url}`;
    console.time(logLabel);

    //Finaliza o Middleware, continuando a execução
    next();

    //Retorna o tempo entre a execução do primeiro console
    console.timeEnd(logLabel);
}
//Verifica se o ID enviado por query é válido
function validateID(req, res, next){
    const {id} = req.params;

    //Verifica se o formato  é válido
    if(!uuid.validate(id)){
        return res.status(400).json({
            Error : "Invalid ID Format"
        })
    }
}

//Ativa o Middleware logRequests
app.use(logRequests);

/**
 * Também é permitido definir as rotas onde o 
 * middleware será usado através do app.use
 * além disso pode ser adicionado indefinidamente
 */
app.use('/projects/:id', validateID);

/**
 * Também pode ser usado em outros middlewares
 * como parâmetros. Exemplo:
 * 
 * app.get('/projects', logRequests, (req, res) => {
 * }
 * 
 * Não há limites para o número de Middlewares
 */

app.get('/projects', (req, res) => {

    const { name } = req.query;
    const results = name

        ? projects.filter(project => project.name.includes(name))
        : projects;

    return res.json(results);
});

app.post('/projects', (req, res) => {

    const { name, year, owner } = req.body;
    const project = { id: uuid.v4(), name, year, owner };

    projects.push(project);

    return res.json(project);

});

app.put('/projects/:id', (req, res) => {

    const { name, year, owner } = req.body;
    const { id } = req.params;

    const projectIndex = projects.findIndex(project => project.id === id);
    console.log(id);

    if (projectIndex < 0) {
        return res.status(400).json({
            Erro: "Project Not Found!"
        });
    }
    else {
        const project = {
            id,
            name,
            year,
            owner

        }

        projects[projectIndex] = project;
        return res.json(project);
    }
});

app.delete('/projects/:id', (req, res) => {

    const { id } = req.params;

    console.log(id);
    const projectIndex =
        projects.findIndex(project => project.id === id);

    if (projectIndex < 0) {
        return res.status(400).json({
            Error: "Project Not Found"
        });
    }
    else {
        projects.splice(projectIndex, 1);
        return res.status(204).send();
    }
});

app.listen(6000, () => {
    console.log("✅ Iniciado");
});