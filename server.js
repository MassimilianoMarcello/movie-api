import express from 'express';
import dotenv from 'dotenv';
// import movie routes
import movieRoutes from './routes/movie.js';
// import middleware
import createLog from './middleware/createLog.js';
import { path, PATH } from './utils/fileSystem.js';

// configure dotenv
dotenv.config();
const PORT = process.env.PORT || 5009;

// initialize express
const app = express();

// parse body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware logging
app.use(createLog);
// serve static file
app.use(express.static(path.join(PATH, 'public')));

// Set the view engine to ejs
app.set('views', path.join(PATH, 'views'));
app.set('view engine', 'ejs');

// use routes
app.use('/api', movieRoutes);

// handle 404
app.use('*', (req, res) => {
    res.status(404).render('404');
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
