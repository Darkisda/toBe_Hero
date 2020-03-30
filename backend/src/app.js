const express = require('express')
const routes = require('./routes')
const { errors } = require('celebrate')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errors())


module.exports = app
/**
 * Rotas: são os links que existe na URL
 * Recursos: são os recursos, como o próprio nome já diz(ksks), que a rota pode oferecer
 * 
 * 
 * 
 * Métodos HTTP
 * 
 * GET: Buscar ou  listar uma informação do backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 * 
 * 
 * 
 * Tipos de Parâmetros
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?", muito utilizados em filtros, paginação...
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * 
 * 
 * 
 * Bancos de Dados utilizado:
 * SQLite
 * Utilizando o Query Build do KnexJS
 */