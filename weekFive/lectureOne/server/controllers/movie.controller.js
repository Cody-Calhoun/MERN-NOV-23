const Movie = require('../models/movie.model');

module.exports = {

    // Get All movies
    getAllMovies: (req, res) => {
        res.json({ message: "Hello World" })







        // Movie.find()
        //     .then((allMovies) => {
        //         console.log(allMovies);
        //         res.json(allMovies);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //         res.status(400).json(err);
        //     });
    },

    // CREATE
    // createMovie: (req, res) => {
    //     Movie.create(req.body)
    //         .then((newMovie) => {
    //             console.log(newMovie);
    //             res.json(newMovie);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //             res.status(400).json(err);
    //         });
    // }
}