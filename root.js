// The root provides a resolver function for each API endpoint

var root = {
  vehicles: () => vehicles,
  getVehicle: ({id}) => {
    return vehicles.find(e => e.id === id);
  }
};

// https://www.valuepenguin.com/auto-insurance/car-make-model
// make is the brand
// bodyStyle: Coupe, Convertible, Sedan, Wagon, Hatchback, SUV
// trimLevels: Standard, Sport, Luxury
// https://en.wikipedia.org/wiki/Car_classification
const vehicles = [
  {
    id: '1',
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
    id: '2',
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

module.exports = root;