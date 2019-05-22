const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema.js');
const mongoose = require('mongoose');
const CONSTANT = require('./constant');

const app = express();

mongoose.connect(`mongodb://${CONSTANT.MONGODB_USERNAME}:${CONSTANT.MONGODB_PASSWORD}@ds147011.mlab.com:47011/heroku_j2m9j51t`,{ useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('connected to database');
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});