const PetController = require('../controllers/pet.controller');

module.exports = (app) => {
    app.get('/api', PetController.index);
    app.get('/api/pet/', PetController.getAllPets);
    app.get('/api/pet/:id', PetController.getOnePet);
    app.post('/api/pet/', PetController.createPet);
    app.put('/api/pet/:id', PetController.updatePet);
    app.delete('/api/pet/:id', PetController.deletePet);
}