const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes.js')
const cors = require('cors')
const app = express();


mongoose.connect('mongodb+srv://contibru:laranjauva@cluster0-qjxlw.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}) 

// Possibilita acesso externo.
app.use(cors());

// Aqui definimos que o aplicativo vai entender requisições Json.
app.use(express.json());

// Importa o uso de rotas.
app.use(routes)


// Métodos HTTP:  get, post, put, delete

// Parâmetros:
// Query Parms: request.query (Fitltros, ordenação,paginação)
    // Exemplo: http://localhost:3333/users/1?search=Bruno
// Rout Params: request.params (Identificar um recurso na alteração ou remoção)
    // Exemplo: http://localhost:3333/users/1
// Body Params: request.body (Dados para criação ou alteração de um registro)
    // Exemplo: {
            //  	"name": "Bruno",
            //   	"email": "conti.bru@gmail.com"
            //  }


// MongoDB (Não-relacional)


app.listen(3333);