const MovieController = require('../controllers/movie.controller');

module.exports = (app) => {

    // GET ALL
    app.get('/api/movies', MovieController.getAllMovies);

    // CREATE
    app.post('/api/movies', MovieController.createMovie);

    // // GET ONE
    app.get('/api/movies/:id', MovieController.getOneMovie);

    // // UPDATE
    app.put('/api/movies/:id', MovieController.updateMovie);

    // // DELETE
    app.delete('/api/movies/:id', MovieController.deleteMovie);
}