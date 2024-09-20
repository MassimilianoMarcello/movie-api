import express from 'express';
import dotenv from 'dotenv';
import movieRoutes from './routes/movie.js';

// configure dotenv
dotenv.config();
const PORT = process.env.PORT || 5009;

// initialize express
const app = express();

// parse body 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware di logging
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// use routes
app.use('/api', movieRoutes); 



// handle 404
app.use('*', (req, res) => {
    res.status(404).json({ message: 'Page is not found' });
});
// error handling
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
});
// listen
app.listen(PORT, () => {
    console.log(`Server is up and running on port : ${PORT}`);
});
