const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const mongoose = require('mongoose')
const cors = require('cors')
const schema = require('./schema/schema')

const app = express()

//allow cross origin requests.
app.use(cors())

mongoose.connect('mongodb://localhost:27017/book-author', { useNewUrlParser: true, useCreateIndex: true })
mongoose.connection.once('open', () => {
    console.log("Connected to database.")
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log("Server listening on port 4000.")
})