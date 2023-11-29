const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: { 
        type: String 
    },
    year: { 
        type: Number 
    },
    rating: { 
        type: Number 
    },
    oscarNomination: {
        type: Boolean
    }
}, { timestamps: true });

const Movie = mongoose.model('Movie', MovieSchema)
module.exports = Movie