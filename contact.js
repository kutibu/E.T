const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    nom:  String,
    prenom: String,
    dateNaissance: String,
    AdressePostal: String,
    AdressePostal: String,
    mail: String,
    telephone: String

  });

const Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact