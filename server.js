const express = require('express');
const bodyParser = require('body-parser');
var graphqlHTTP = require('express-graphql');
var graphql = require('graphql');
var { buildSchema } = require('graphql');

// setting up node server loosely following:
// https://medium.freecodecamp.org/building-a-simple-node-js-api-in-under-30-minutes-a07ea9e390d2

const app = express();

const port = 8000;

// app.use(bodyParser.urlencoded({ extended: true }));

// https://www.valuepenguin.com/auto-insurance/car-make-model
// make is the brand
// bodyStyle: Coupe, Convertible, Sedan, Wagon, Hatchback, SUV
// trimLevels: Standard, Sport, Luxury
// https://en.wikipedia.org/wiki/Car_classification
const vehicles = [
  {
    id: 1,
    year: '2018',
    make: 'Honda',
    model: 'Civic',
    bodyStyle: 'Sedan', 
    trimLevel: 'LX',
    seats: 4,
    color: 'green',
    licensePlate: 'ed-12-ej',
    description: ''
  },
  {
    id: 2,
    year: '2018',
    make: 'Honda',
    model: 'Civic',
    bodyStyle: 'Hatchback',
    trimLevel: 'EX',
    seats: 4,
    color: 'black',
    licensePlate: '24-ab-ef',
    description: ''
  }
]

var schema = buildSchema(`
type Query {
  hello: String
}
`);
var root = {
  hello: () => {
    return 'hello world!';
  }
};

// GraphQL endpoint?
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
  pretty: true
}));
// REST get
/*app.get('/vehicle-list', (req, res) => {
  res.send(vehicles)
});*/
app.listen(port, () => {
  console.log('We are live on ' + port);
});