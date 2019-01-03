const express = require('express');
var graphqlHTTP = require('express-graphql');
const fs = require('fs');
var { buildSchema } = require('graphql');
const root = require('./root.js');

// setting up node server loosely following:
// https://medium.freecodecamp.org/building-a-simple-node-js-api-in-under-30-minutes-a07ea9e390d2

const app = express();
const port = 8000;

fs.readFile('schema.gql', 'utf8', (err, data) => {
  if(!err) runServerWithSchema(data);
  else console.log('error', err);
});

function runServerWithSchema(schemaString) {
  setupGraphQl(schemaString);
  app.listen(port, () => {
    console.log('We are live on ' + port);
  });
}

function setupGraphQl(schemaString) {
  var schema = buildSchema(schemaString);
  app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
    pretty: true
  }));
}
