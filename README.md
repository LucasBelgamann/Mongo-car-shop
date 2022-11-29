# Boas vindas ao repositório do Mongo-Car-Shop 

Para este projeto, foram desenvolvidos os princípios de Programação Orientada a Objetos (POO) para a construção de uma API com CRUD para gerenciar uma concessionária de veículos. Isso será feito utilizando o banco de dados MongoDB através do framework do Mongoose.

# Como foi desenvolvimento

<a href="https://www.betrybe.com/" target="blanck" ><img src="https://blog.betrybe.com/wp-content/uploads/2021/11/51808343.png" width="30" height="33" alt="Jest" /></a> - Esse projeto foi feito individualmente dentro da organização da trybe.


## 🛸 # Construído com

* <a href="https://nodejs.org/en/" target="blanck" >Node.js</a> - Tecnologia utilizada.
* <a href="https://www.mysql.com/" target="blanck" >MongoDb</a> - banco de dados NoSQL.
* <a href="https://www.mysql.com/" target="blanck" >Mongoose</a> - Conexão entre o MongoDB.
* <a href="https://www.devmedia.com.br/arquitetura-de-software-desenvolvimento-orientado-para-arquitetura/8033" target="blanck" >MSC</a> - Sistema de arquitetura de software.
* <a href="https://sequelize.org/" target="blanck" >POO (Programação orientada a objetos)</a> - Estrutura do projeto.
* <a href="https://www.typescriptlang.org/" target="blanck" >Typescript</a> -Linguagem de programação utilizada.
* <a href="https://expressjs.com/pt-br/" target="blanck" >Express</a> - Framework para Node.js que fornece recursos mínimos para construção de servidores web.

## Rodando o seu projeto localmente

<strong>1. Faça o git clone na sua máquina e entre no diretório:</strong>
 - Lembre-se de clonar o repositório no diretório desejado na sua máquina!
 ```
 git clone git@github.com:LucasBelgamann/Mongo-car-shop.git
 cd project-car-shop
 ```
 
 <strong>2. Escolha por onde rodar a aplicação: Docker vs Local</strong>

<details>
  <summary><strong>🐳 Rodando no Docker</strong></summary> 
  </br>

  **:warning: Seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.**


  👉 <strong> 2.1 Rode os serviços `node` e `db` com o comando: </strong>
  ```
  docker-compose up -d --build
  ```

  :warning: Lembre-se de parar qualquer aplicação que estiver usando localmente na porta padrão (`3306`), seja docker ou mySQL, ou adapte, caso queria fazer uso da aplicação em containers;

  - Esses serviços irão inicializar um container chamado `car_shop` e outro chamado `car_shop_db`;

  - A partir daqui você pode rodar o container `car_shop` via CLI ou abri-lo no VS Code;

  👉 <strong>2.2 Use o comando:</strong>
  ```
  docker exec -it car_shop bash
  ```
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  👉 <strong>2.3 Instale as dependências dentro do container com:</strong>
  ```
  npm install
  npm run debug
  ```
  
  - **:warning: Atenção:** Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 

  - ✨ **Dica:** A extensão `Remote - Containers` (que estará na seção de extensões recomendadas do VS Code) é indicada para que você possa desenvolver sua aplicação no container Docker direto no VS Code, como você faz com seus arquivos locais.

</details>

<details>
  <summary><strong> 💻 Localmente</strong></summary> 
</br>

👉 <strong>2.1 Instale as dependências: </strong>
```
npm install
```

- **:warning: Atenção:** Não esqueça de renomear/configurar o arquivo `.env.example` para os testes locais funcionarem.
- **:warning: Atenção:** Para rodar o projeto desta forma, **obrigatoriamente** você deve ter o `Node.js` instalado em seu computador.
- **:warning: Atenção:** A versão do `Node.js` e `NPM` a ser utilizada é `"node": ">=16.0.0"` e `"npm": ">=7.0.0"`, como descrito a chave `engines` no arquivo `package.json`. Idealmente deve-se utilizar o Node.js na `versão 16.14`, a versão na que esse projeto foi testado.

  <br/>
 </details>
