import express from 'express';
import controllers from '../controllers/movie.js'


const router = express.Router();
const {getMovie,getMovies,addMovie,updateMovie,deleteMovie}= controllers

// routes
router.get('/',getMovies)
router.get('/:id',getMovie)
router.post('/', addMovie)
router.put('/:id',updateMovie)
router.delete('/:id',deleteMovie)

export default router;
