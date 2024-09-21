let movies = [
    { id: 1, name: 'The Dark Knight', year: '2008', genre: 'Action' },
    { id: 2, name: 'Pulp Fiction', year: '1994', genre: 'Crime' },
    { id: 3, name: 'Inception', year: '2010', genre: 'Sci-Fi' },
    { id: 4, name: 'The Matrix', year: '1999', genre: 'Sci-Fi' },
    { id: 5, name: 'Forrest Gump', year: '1994', genre: 'Drama' }
];

const controllers = {
    getMovies: (req, res) => {
        res.status(200).json(movies);
    },
    getMovie: (req, res) => {
        const { id } = req.params;

        const isMovie = movies.find((movie) => movie.id === id);
        if (isMovie) {
            res.status(200).json( {message: 'Movie:', isMovie });
        } else {
            res.status(404).json({ message: 'Movie not found' });
        }
    },
    addMovie: (req, res) => {
        const{id,name,year,genre}=req.body
if(!name || !year || !genre){
         return   res.status(400).send('add a name,a year and a genre')
         }
         const newMovie={
            id:movies.length + 1,
            name,
            year,
            genre
         }
          movies.push(newMovie)
          res.status(201).json(newMovie)
          console.log(movies);
    },
    updateMovie: (req, res) => {
        const{name,year,genre}=req.body
        const{id}=req.params
let moviebyId =movies.find(movie=>movie.id===parseInt(id))
if(!moviebyId){
    return res.status(404).json({ error: 'Movie not found' });
   
  
}else{
    moviebyId.name=name 
    moviebyId.year=year
    moviebyId.genre=genre
 
    console.log(movies);
    return  res.status(200).json({ message: 'Movie deleted', moviebyId})
}
  


        
    },
    deleteMovie: (req, res) => {
        const { id } = req.params;
        const movie = movies.find(movie => movie.id === parseInt(id));
        
        if (!movie) {
            return res.status(404).json({ error: 'Movie not found' });
        }
    
        movies = movies.filter(movie => movie.id !== parseInt(id));
        console.log(movies);
        res.status(200).json({ message: 'Movie deleted', movies });
    }}
    

export default controllers;
