const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const contactRouter = require('./routes/contact');

const app = express();
const PORT =  8080;

//MongoDB
require('dotenv').config();
console.log("Connect String: ",process.env.MONGODB_CONNECT_STRING)
mongoose.connect(process.env.MONGODB_CONNECT_STRING)
    .then(() => console.log("Sucessfully Connected to MongoDB"))
    .catch(err => console.log("MongoDb connection error: " , err));


//Middleware: Log Routes 
app.use((req, res, next) =>{
    console.log(req.method, req.path)
    next();
});

app.use(express.json());
app.use(cors());

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

//Contact Route
app.use('/contact', contactRouter);



app.listen(PORT, () => {    
    console.log("Backend Server is running on port: 8080");
})
