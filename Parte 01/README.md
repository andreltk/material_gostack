# Projeto 01

## Anotações

### Início

* ### Crie a pasta do projeto

* ### No Terminal digite

   ```bash
   yarn init
   ```

 isso cria uma série de arquivo como o README.md e afins

* ### É recomendado colocar todo o código numa pasta _src_ para manter a organização

* ### Pode ser necessário a instalação do Express

   ```bash
   yarn install express
   ```

   ou caso já tenha sido instalada:

   ```bash
   yarn add express
   ```

* ### Adicionar o NodeMon

  Uma ferramenta interessante é a _nodemon_ que permite a atualização do servidor em caso de mudandça de código

   ```bash
   yarn add nodemon -D
   ```

 a opção _-D_ indica que essa é uma dependência somente de desenvolvimento, pois não é recomendado a alteração de código em um sistema já em execução.

 Após isso pode é necessário iniciar o _nordmon_ com:

   ```bash
   yarn nodemon [caminho/index.js]
   ```

   também é posível alterando o arquivo _package.json_

Adiciona-se um **alias** para o comando, e altera-se o caminho do arquivo principal como no exemplo abaixo, onde o comando recebeu o nome de _monitor_ e o caminho do _index.js_ principal do projeto foi definido:

 ```json
 {
  "name": "Projeto 01",
  "dependencies": {
    "express": "^4.17.1"
  },
  "main": "index.js",
  "scripts": {
      "monitor" : "nodemon src/index.js" 
  },
  "devDependencies": {
    "nodemon": "^2.0.7"
  }
}
```

### Métodos de Requisição HTTP

[Mais Informações](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods)

* **GET**
  
    O método GET solicita a representação de um recurso específico (no back-end por exemplo). Requisições utilizando o método GET devem retornar apenas dados.

* **HEAD**
  
     O método HEAD solicita uma resposta de forma idêntica ao método GET, porém sem conter o corpo da resposta.

* **POST**

    O método POST é utilizado para submeter uma entidade a um recurso específico (criar uma nova informação back-end), frequentemente causando uma mudança no estado do recurso ou efeitos colaterais no servidor.

* **PUT**

    O método PUT substitui todas as atuais representações do recurso de destino pela carga de dados da requisição.(Como um perfil de usuário completo)

* **PATCH**

    O método PATCH é utilizado para aplicar modificações parciais em um recurso.(Somente uma parte, como uma imagem de perfil por exemplo)

* **DELETE**

    O método DELETE remove um recurso específico.

* **CONNECT**

    O método CONNECT estabelece um túnel para o servidor identificado pelo recurso de destino.

* **OPTIONS**

    O método OPTIONS é usado para descrever as opções de comunicação com o recurso de destino.

* **TRACE**

    O método TRACE executa um teste de chamada loop-back junto com o caminho para o recurso de destino.

### Tipos de Parâmetros

Os principais parâmetros são:

* **Query Params**

    Usados geralmente para filtros e paginação, são parâmetros enviados atráves dos **?**.

Exemplo:

<p  style="text-align: center"><i>
localhost:3000/?name=Andre</i>
</p>

Os query params são mais utilizados quando queremos fazer um redirecionamento ou quando temos muitos parâmetros na URL. Para adicionar mais de um parâmetro, é utilizado o **&**

* **Route Params**

    Recebe os dados da requisição na rota. E costuma ser usado para buscar algo específico, deletar ou atualizar usando o identificador único, por exemplo:

<p style="text-align:center"><i>
http://localhost:6000/projects/0
</i>
</p> 

* **Request Body**

    Recebe os dados da requisição no corpo da requisição, em um objeto em JSON. Sempre utilizando no método POST da requisição.

    O método PUT também recebe Route Params informando qual recurso vai ser modificado e recebe o Body Params com os valores que serão alterados.


### UUID

 UUID (Universally Unique Identifier) é um campo de 128 bits representado por 32 dígitos hexadecimais, exibidos em cinco grupos separados por hifens. Por exemplo,

_22ed1a08-cfe8-4833-b8a0-945a0264beb6_

O UUID fornece uma identificação única para uma determinada informação do sistema

É recomendado seu uso para gerenciamento de IDs em um projeto, sendo possível instalar com:

```bash
yarn install uuid
```

### MiddleWare

Funções de Middleware são funções que tem acesso ao objeto de solicitação (req), o objeto de resposta (res), e a próxima função de middleware no ciclo solicitação-resposta do aplicativo. A próxima função middleware é comumente denotada por uma variável chamada **next**.

Funções de middleware podem executar as seguintes tarefas:

* Executar qualquer código.
* Fazer mudanças nos objetos de solicitação e resposta.
* Encerrar o ciclo de solicitação-resposta.
* Chamar a próxima função de middleware na pilha.

Se a atual função de middleware não terminar o ciclo de solicitação-resposta, ela precisa chamar _next()_ para passar o controle para a próxima função de middleware. Caso contrário, a solicitação ficará suspensa.

