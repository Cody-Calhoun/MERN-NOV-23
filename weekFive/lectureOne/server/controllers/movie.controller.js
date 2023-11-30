const Movie = require('../models/movie.model');

module.exports = {

    // Get All movies
    getAllMovies: (req, res) => {
        Movie.find()
            .then((allMovies) => {
                console.log(allMovies);
                res.json(allMovies);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // Get One movie
    getOneMovie: (req, res) => {
        Movie.findById(req.params.id)
            .then((oneMovie) => {
                console.log(oneMovie);
                res.json(oneMovie);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // CREATE
    createMovie: (req, res) => {
        Movie.create(req.body)
            .then((newMovie) => {
                console.log(newMovie);
                res.json(newMovie);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // UPDATE
    updateMovie: (req, res) => {
        Movie.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
            .then((updatedMovie) => {
                console.log(updatedMovie);
                res.json(updatedMovie);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
},

//DELETE
deleteMovie: (req, res) => {
    Movie.findByIdAndDelete(req.params.id)
        .then((deletedMovie) => {
            console.log(deletedMovie);
            res.json(deletedMovie);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
}
}