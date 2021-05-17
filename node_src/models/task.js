const mongoose = require('mongoose');

// Création du modèle task
module.exports.Task = mongoose.model('task', 
    {
        title: {type: String},
});