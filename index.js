// Lancer le serveur : node index.js

const express = require("express");
const app = express();
//const db = require("./db.json");
const mongoose = require('mongoose');
const Contact = require('./contact.js')

mongoose.connect('mongodb+srv://root:root@et.9egk4.mongodb.net/ET?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

// Middleware
app.use(express.json());

app.get("/api/contact", (req, res) => {
  Contact.find()
    .then(contact => res.status(200).json(contact))
    .catch(error => res.status(404).json({ error }));
});

app.get("/api/contact/:id", (req, res) => {
  Contact.findOne({_id: req.params.id})
    .then(contact => res.status(200).json(contact))
    .catch(error => res.status(404).json({ error }));
});

app.post('/api/contact', (req, res, next) => {
  delete req.body._id;
  const contact = new Contact({
    ...req.body
  });
  contact.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
});

app.delete("/api/contact/:id", (req, res) => {
  Contact.deleteOne({_id: req.params.id})
  .then(() => res.status(201).json({ message: 'Objet supprimer !'}))
    .catch(error => res.status(404).json({ error }));
});

app.listen(8080, () => {
  console.log("Serveur à l écoute");
});

//module.exports = index;
