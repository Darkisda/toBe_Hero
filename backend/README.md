### BackEnd

Utilizando uma das stacks mais forte do mercado, o NodeJS. Com ela, conseguimos utilizar o máximo possivel do poder da linguagem JavaScript.



# Express

Fará com que a nossa aplicação seja escutada e assim possa rodar todos os nosso codes. Use `npm install express`. Qualquer dúvida, consulte a [documentação](https://expressjs.com/pt-br/starter/installing.html) do express.



# Nodemon

Atualizará nosso servidor automáticamente, sem precisar salvando e reiniciando direto. Use `npm install nodemon -D` para utiliza-lo como depêndencia de desenvolvimento.
No package.json altere:

"scripts": {
    "start": "nodemon src/index.js",
}


# KnexJS

Nessa aplicação, será utilizado um banco de dados Relacional em SQL, mais precisamente o KnexJS. Para instalar use `npm install knex`, depois instale o driver que você deseja utilizar... Nesse caso utilizaremos o SQLite. Para instalar o SQLite, use `npm install sqlite3`. Para gerar o arquivo que contêm as informações do banco de dados da aplicação, use `npx knex init`, que gerará o arquivo *knexfile.js*. Nesse arquivo determine onde a conecção irá ficar. Por exemplo:

connection: {
      filename: './src/database/db.sqlite'
}

Para criar uma migration use `npx knex migrate:make NOMEDATABELA`

