const express = require('express');
const { FitnessApp, User} = require('./model');

var fitapp = new FitnessApp();
const app = express.Router();

app.get("/", (req,res) => {
    res.send(fitapp);
});
// login a new user
app.post('/register', (req,res) => {
    let user = fitapp.login(req.params.body, req.params.age);
    res.send(user);
});

//finding a user using its name
app.get('/find/:name', (req,res) => {
    const name = fitapp.users.find(x => x.name === String(req.params.name));
    if(!name){
        res.status(404).send('Name Not Fouund');
    }
    res.send(name);
});


module.exports = app;