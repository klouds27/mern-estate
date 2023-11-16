import express from 'express'; // import express
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
dotenv.config();

mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB', error.message);
    });

const app = express(); // create express app

app.listen(3000, () => {
    console.log('Server running on port 3000'); 
}); // listen on port 3000


app.get('/', (req, res) => {
    res.send('Hello World');
}); // default route