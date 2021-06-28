import express from 'express'
import cors from 'cors'
import { graphqlHTTP } from 'express-graphql'
import { schema } from './Schema'


const app = express()

app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})