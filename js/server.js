const express = require('express');
const app = express();
const PORT =  8080;

app.get('/', (req,res) => {
    res.send("GET: Hello from Express");
    
})

app.listen(PORT, () => {
    console.log("Backend Server is running on port: 8080");
})
