# Domain Driven Design no Node.js

Este código mostra um exemplo de estrutura de aplicação em Node.js modelada com alguns conceitos de Domain Driven Design api Marvel.



As histórias que vamos modelar são:

````
- "O endereço deve ser usado noAPI Marvel para conseguir utilizar as rotas"
- "Eu devo poder salvar meu cadastratro Administrador"
- "Contrato Cadastro Administrativo {"name":"seu nome", "email":""seu email, "password":"senha"}"
- "Uma rota é para cadastro, instruções ordenadas"

````

Os requisitos para rodar este código são:
- Node.js


### Como iniciar a aplicação?

1. Rode o comando `yarn install` na pasta raiz do código para instalar as dependências;
2. Inicie o banco de dados MongoDb local ou CLoud`
3. Inicie a aplicação com `yarn dev`

### Como executar um caso de uso da aplicação

Acesse a url http://localhost:3333 no seu navegador, Insomia, Postman ou de sua preferencia:

1. Execute para inserir os dados no banco de dados:

````
Rota CreateAdmin
(POST)-http://localhost:3333/admin

{
  "name":"seu nome",
  "email":""seu email,
  "password":"senha"
}


````
2. Execute login Administrativo:

(POST)-http://localhost:3333/login
```
{
  "email":"seu email",
  "password":"senha"
}

#Seu Token será gerado e sessão.
```

3. Execute a lista de Admin com autenticação:
```
(GET)-http://localhost:3333/admin

Headers
Authorization e Baerer (Token)

```

4. Execute delete Admin com autenticação:
```
(DELETE)-http://localhost:3333/admin/id-do-admin

Headers
Authorization e Baerer (Token)

```

5. Execute os logs de Admin com autenticação:
esta rota deverá apresentar todas as pesquisas realizada dos personagens  armazenados no banco MongoDb
```

(GET)-http://localhost:3333/logs

Headers
Authorization e Baerer (Token)

```

6. Execute a lista de personagens Marvel com paginação:
está rota apresentará todas as pesquisas de personagens.
```
(GET)-http://localhost:3333/marvel

```

7. Execute pesquisa personagem Marvel por ID:
esta rota apresentará personagem da Marvel unico, segue o id exemplo real na api.
```
(GET)-http://localhost:3333/marvel/1010354

```

### Observações

Este código é um exemplo de como aplicar a teoria do DDD em um projeto Node.js / Ts, com algumas adaptações pertinentes a linguagem.

Sinta-se a vontade para contactar no caso de quaisquer dúvidas em [@fernandosorrentino](https://github.com/Sorretino)
