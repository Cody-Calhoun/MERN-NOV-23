const express = require('express');
const app = express();
const port = 8000;

require('./config/mongoose.config');

app.use(express.json(), express.urlencoded({ extended: true }));

const movieRoutes = require('./routes/movie.routes');
movieRoutes(app);


app.listen(port, () => console.log("listening on port 8000"));