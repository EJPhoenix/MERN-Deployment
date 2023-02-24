const Pet = require('../models/pet.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    })
}

module.exports.createPet = (request, response) => {
    Pet.create(request.body)
        .then(pet => response.json(pet))
        .catch((err) => {
            response.status(500).json(err);
            console.log(err);
        });
}

module.exports.getAllPets = (request, response) => {
    Pet.find({})
        .then(pets => {
            console.log(pets);
            response.json(pets);
        })
        .catch((err) => {
            response.status(500).json(err)
        })
}

module.exports.getOnePet = (request, response) => {
    Pet.findOne({_id:request.params.id})
        .then(pet => response.json(pet))
        .catch((err) => {
            response.status(500).json(err)
        });
}

module.exports.updatePet = (request, response) => {
    Pet.findOneAndUpdate({_id:request.params.id}, request.body, {new:true, runValidators: true})
    .then(updatedPet =>response.json(updatedPet))
    .catch((err) => {
        response.status(500).json(err)
    })
}

module.exports.deletePet = (request, response) => {
    Pet.deleteOne({_id:request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch((err) => {
            response.status(500).json(err)
        })
}