const express = require('express');
const { FitnessApp, User} = require('./model');

var fitapp = new FitnessApp();
const app = express.Router();

app.get("/", (req,res) => {
    res.send(fitapp);
});
// login a new user
app.post('/register', (req,res) => {
    let user = new User(req.body.name, req.body.age);
    fitapp.users.push(user);
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