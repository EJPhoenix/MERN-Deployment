const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const PetSchema = new mongoose.Schema({
    "petName": { 
        type: String,
        unique: true,
        required: [true, "Pet name is required!"],
        minLength: [3, "Pet Name must be at least 3 characters!"]
    },
    "petType": { 
        type: String,
        required: [true, "Pet type is required!"],
        minLength: [3, "Pet Type must be at least 3 characters!"],
    },
    "petDescription": { 
        type: String,
        required: [true, "Pet description is required!"],
        minLength: [3, "Pet Desciption must be at least 3 characters!"]
    },
    "petSkillOne": { 
        type: String
    },
    "petSkillTwo": { 
        type: String
    },
    "petSkillThree": { 
        type: String
    }
}, { timestamps: true });

PetSchema.plugin(uniqueValidator, { message: 'Name already used!'});

module.exports = mongoose.model('Pet', PetSchema);