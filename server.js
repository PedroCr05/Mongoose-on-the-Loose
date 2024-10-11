const express = require(`express`);
const cors = require(`cors`);
const db = require(`./db`);
const animalController = require(`./controllers/animal-controllers`);
const bodyParser = require(`body-parser`);
const logger = require(`morgan`);

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger(`dev`));
app.use(bodyParser.json());

app.get(`/`, (req, res) =>
  res.send(
    `Hello there! You've just arrived at the animals DB. Please begin by <a href="http://localhost:3001/animals">clicking me!</a>`
  )
);

app.get(`/animals`, animalController.getAllAnimals);
app.get(`/traits`, animalController.getAllTraits);

app.get(`/animals/:id`, animalController.getAnimalsById);
app.get(`/traits/:id`, animalController.getTraitsById);

app.post(`/animals`, animalController.createNewSpecies);
app.post(`/traits`, animalController.createNewTraits);

app.put(`/animals/:id`, animalController.updateSpecies);
app.put(`/traits/:id`, animalController.updateTrait);

app.delete(`/animals/:id`, animalController.deleteSpecies);
app.delete(`/traits/:id`, animalController.deleteTrait);

app.listen(PORT, () => console.log(`Running at ${PORT}`));
