import * as express from 'express';

const app = express();

const pets = [
  { id: '1' , type: 'dog', name: 'Rufus', age: '', favoriteToy: '', preferedPark: '', profilePicture: ''},
  { id: '2' , type: 'dog', name: 'Max', age: '', favoriteToy: '', preferedPark: '', profilePicture: ''},
  { id: '3' , type: 'dog', name: 'Fido', age: '', favoriteToy: '', preferedPark: '', profilePicture: ''},
  { id: '4' , type: 'dog', name: 'Barkley', age: '', favoriteToy: '', preferedPark: '', profilePicture: ''},
  { id: '5' , type: 'dog', name: 'Clifford', age: '', favoriteToy: '', preferedPark: '', profilePicture: ''},
  { id: '6' , type: 'turte', name: 'Donatello', age: '', favoriteToy: '', preferedPark: '', profilePicture: ''},
  { id: '7' , type: 'turte', name: 'Raphael', age: '', favoriteToy: '', preferedPark: '', profilePicture: ''},
  { id: '8' , type: 'turte', name: 'Michelangelo', age: '', favoriteToy: '', preferedPark: '', profilePicture: ''},
  { id: '9' , type: 'turte', name: 'Donatello', age: '', favoriteToy: '', preferedPark: '', profilePicture: ''},
  { id: '10' , type: 'turte', name: 'Ricky Tabby', age: '', favoriteToy: '', preferedPark: '', profilePicture: ''},
  { id: '11' , type: 'cat', name: 'Snowball', age: '', favoriteToy: '', preferedPark: '', profilePicture: ''},
  { id: '12' , type: 'cat', name: 'Mr. Pickles', age: '', favoriteToy: '', preferedPark: '', profilePicture: ''},
  { id: '13' , type: 'cat', name: 'Jennifurr', age: '', favoriteToy: '', preferedPark: '', profilePicture: ''},
];

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

app.get('/api/pet/:id', (req, res) => {
  res.send(pets.filter(pet => pet.id === req.params['id']));
});

app.get('/api/pets', (req, res) => {
  res.send(pets);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
