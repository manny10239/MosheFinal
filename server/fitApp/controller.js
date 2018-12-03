const express = require('express');
const { FitnessApp, User} = require('./model');

var fitapp = new FitnessApp();
const app = express.Router();

app.get("/", (req,res) => {
    res.send(fitapp);
});
// login a MainUser
app.post('/', (req,res) => {
    let user = new User(req.body.name, req.body.age);
    if(fitapp.MainUser.length <= 0){
        fitapp.MainUser.push(user);
    }
    fitapp.users.push(user);
    console.log("Main User created "+ fitapp.MainUser[0].name);
    res.send(user);
});
// get main user information
app.get('/profile', (req,res) => {
    if(fitapp.MainUser.length + 1 >= 1){
        let main = new User(fitapp.MainUser[0]);
    }
    else{
        console.log('Must Register first');
    }
    res.send(main);
});
//finding a user using its name
app.get('/findUser/:name', (req,res) => {
    const name = fitapp.users.find(x => x.name === String(req.params.name));
    if(!name){
        res.status(404).send('Name Not Found');
    }
    
    res.send(name);
});


module.exports = app;