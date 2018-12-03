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
        fitapp.users.push(user);
        console.log("Main User created "+ fitapp.MainUser[0].name);
    }
    else{
        fitapp.users.push(user);
    }
    res.send(user);
});
// get main user information
app.get('/profile', (req,res) => {
    let main = new User(fitapp.MainUser[0]);
    res.send(main);
});
//finding a user using its name
app.get('/addUser/:name', (req,res) => {
    const mainUser = fitapp.MainUser.find(c => c.name === String(req.params.name))
    const name = fitapp.users.find(x => x.name === String(req.params.name));
    if(!name){
        res.status(404).send('Name Not Found');
    }
    else{
        fitapp.MainUser[0].friends.push(name);
    }
    res.send(name);
});


module.exports = app;