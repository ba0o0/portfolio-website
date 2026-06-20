const express = require('express');
const cors = require('cors');
const app = express();
const PORT =  8080;

app.use(express.json());
app.use(cors());


app.get('/', (req,res) => {
    res.send("GET: Hello from Express");
    
});

app.get('/about', (req, res) => {
    res.send('This is the about page')
});

app.get('/products', (req, res) => {
    res.json([
        {id: 0, name: 'Chud', date:"09/10/2004 @ 7:38 pm"},
        {id: 1, name: 'oba', date:"09/11/2004 @ 7 pm"}
    ])
});

app.get('/products/:id', (req, res) => {
    const id = Number (req.params.id);
    const product = [
        {id: 0, name: 'Chud', date:"09/10/2004 @ 7:38 pm"},
        {id: 1, name: 'oba', date:"09/11/2004 @ 7 pm"}
    ]   

    const requestedProduct = product.find((product) => product.id === id);
    res.json(requestedProduct);
});


// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

app.post('/contact', (req, res) => {
    const email = req.body.email;
    console.log('Email recieved:' , email);

    res.json({message: 'Thanks for reaching out! I\'ll get back to you soon.'});
});



app.listen(PORT, () => {    
    console.log("Backend Server is running on port: 8080");
})
