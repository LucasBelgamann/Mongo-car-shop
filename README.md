# Boas vindas ao repositório do Mongo-Car-Shop 

Para este projeto, foram desenvolvidos os princípios de Programação Orientada a Objetos (POO) para a construção de uma API com CRUD para gerenciar uma concessionária de veículos. Isso será feito utilizando o banco de dados MongoDB através do framework do Mongoose.

# Como foi desenvolvimento

<a href="https://www.betrybe.com/" target="blanck" ><img src="https://blog.betrybe.com/wp-content/uploads/2021/11/51808343.png" width="30" height="33" alt="Jest" /></a> - Esse projeto foi feito individualmente dentro da organização da trybe.


## 🛸 # Construído com

* <a href="https://www.mongodb.com/home" target="blanck" ><img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ficons8.com.br%2Ficon%2F74402%2Fmongodb&psig=AOvVaw0_S2UHuXYzhkyfz8_td6Kj&ust=1669771729384000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMC168ee0vsCFQAAAAAdAAAAABAE" width="30" height="33" alt="Jest" /></a> - MongoDb - banco de dados NoSQL.
* <a href="https://www.mongodb.com/home" target="blanck" ><img src="https://the-guild.dev/blog-assets/nodejs-esm/nodejs_logo.png" width="30" height="33" alt="Jest" /></a> - Node - Tecnologia utilizada.
* <a href="https://nodejs.org/en/" target="blanck" ><img src="https://the-guild.dev/blog-assets/nodejs-esm/nodejs_logo.png" width="30" height="33" alt="Jest" /></a> - Mongoose - Conexão com o MongoDB.
* <a href="https://www.devmedia.com.br/programacao-orientada-a-objetos-e-programacao-estruturada/32813#:~:text=A%20programa%C3%A7%C3%A3o%20orientada%20a%20objetos%20%C3%A9%20um%20modelo%20de%20programa%C3%A7%C3%A3o,estados%20poss%C3%ADveis%20definidos%20por%20atributos." ><img src="https://cdn-icons-png.flaticon.com/512/446/446969.png" width="30" height="33" alt="Jest" /></a> - POO (Programação orientada a objetos) - Estrutura do projeto.
* <a href="https://www.typescriptlang.org/" target="blanck" ><img src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" width="30" height="33" alt="Jest" /></a> - Typescript - Linguagem de programação utilizada.
* <a href="https://expressjs.com/pt-br/" target="blanck" ><img src="https://assets.website-files.com/61ca3f775a79ec5f87fcf937/6202fcdee5ee8636a145a41b_1234.png" width="30" height="33" alt="Jest" /></a> - Express - Framework para Node.js que fornece recursos mínimos para construção de servidores web.

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
