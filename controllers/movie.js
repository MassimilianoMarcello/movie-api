import findMovie from '../utils/findMovie.js';

let movies = [
    { id: 1, name: 'The Dark Knight', year: '2008', genre: 'Action' },
    { id: 2, name: 'Pulp Fiction', year: '1994', genre: 'Crime' },
    { id: 3, name: 'Inception', year: '2010', genre: 'Sci-Fi' },
    { id: 4, name: 'The Matrix', year: '1999', genre: 'Sci-Fi' },
    { id: 5, name: 'Forrest Gump', year: '1994', genre: 'Drama' }
];

// const findMovie=(movies,id)=>{
//     return movies.find((movie) => movie.id === id);
// }

const controllers = {
    getMovies: (req, res) => {
        res.status(200).json(movies);
    },
    getMovie: (req, res) => {
        const { id } = req.params;
        const isMovie = findMovie(movies, id);
        if (isMovie) {
            res.status(200).json({ message: 'Movie:', isMovie });
        } else {
            res.status(404).json({ message: 'Movie not found' });
        }
    },
    addMovie: (req, res) => {
        const { id, name, year, genre } = req.body;
        if (!name || !year || !genre) {
            return res.status(400).send('add a name,a year and a genre');
        }
        const newMovie = {
            id: movies.length + 1,
            name,
            year,
            genre
        };
        movies.push(newMovie);
        res.status(201).json(newMovie);
        console.log(movies);
    },
    updateMovie: (req, res) => {
        const { name, year, genre } = req.body;
        const { id } = req.params;
        let moviebyId = findMovie(movies, id);
        if (!moviebyId) {
            return res.status(404).json({ error: 'Movie not found' });
        } else {
            moviebyId.name = name;
            moviebyId.year = year;
            moviebyId.genre = genre;

            console.log(movies);
            return res
                .status(200)
                .json({ message: 'Movie updated', moviebyId });
        }
    },
    deleteMovie: (req, res) => {
        const { id } = req.params;
        const movie = findMovie(movies, id);

        if (!movie) {
            return res.status(404).json({ error: 'Movie not found' });
        }

        movies = movies.filter((movie) => movie.id !== parseInt(id));
        console.log(movies);
        res.status(200).json({ movie_deleted: 'Movie deleted', movie, new_list:'New movie List',movies });
    }
};

export default controllers;
