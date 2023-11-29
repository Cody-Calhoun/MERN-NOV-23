const express = require('express'); // This means to import express
const app = express(); // This means to create an instance of express
const port = 8000; // This means to set the port to 8000

app.use( express.json() ); // This means to use express.json
app.use( express.urlencoded({ extended: true }) ); // This means to use express.urlencoded

const movies = [
    { id: 1, title: "Star Wars", year: 1977 },
    { id: 2, title: "The Matrix", year: 1999 },
    { id: 3, title: "The Lord of the Rings", year: 2001 },
];

// Routes
app.get('/api', (req, res) => {
    res.json({ message: "Hello World" });
});

// Get all movies
app.get('/api/movies', (req, res) => {  // This means to get all movies
    res.json({ movies: movies });
}
);

// Create a movie
app.post('/api/movies', (req, res) => { // This means to create a movie
    movies.push(req.body);
    res.json({ message: "Created a movie" });
}
);

// Get a movie by id
app.get('/api/movies/:id', (req, res) => { // This means to get a movie by id
    const id = req.params.id;
    // const movie = movies.find(movie => movie.id == id);
    // res.json({ movie: movie });
    res.json({ message: "movie" });
}
);



app.listen( port, () => console.log(`Listening on port: ${port}`) ); // This means to listen to port 8000 and console.log that we are listening to port 8000