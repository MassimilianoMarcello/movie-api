let movies = [
    { id: '1', name: 'The Dark Knight', year: '2008', genre: 'Action' },
    { id: "2", name: 'Pulp Fiction', year: '1994', genre: 'Crime' },
    { id: "3", name: 'Inception', year: '2010', genre: 'Sci-Fi' },
    { id: "4", name: 'The Matrix', year: '1999', genre: 'Sci-Fi' },
    { id: "5", name: 'Forrest Gump', year: '1994', genre: 'Drama' }
];

const controllers = {
    getMovies: (req, res) => {
        res.status(200).json(movies);
    },
  getMovie: (req, res) => { },
    addMovie: (req, res) => {},
    updateMovie: (req, res) => {},
    deleteMovie: (req, res) => {}
};

export default controllers;
