const express = require('express');
const {FitnessApp, User} = require('./model');

const fitapp = new FitnessApp();
const app = express.Router();

app.get("/", (req, res) => {
    res.send(fitapp);
});

// Create main user 
app.post('/users', (req,res) => {
    fitapp.login(req.body.name, req.body.age, req.body.height, req.body.weight);
    res.send(fitapp);
});

// add friend 
app.get('/addFriend/:name', (req, res) =>{
    const main = fitapp.MainUser.find( c => c.id === 1);
    const friend = fitapp.users.find(c => c.name === String(req.params.name));

    if(!friend || main.friends.find( c => c.name === String(friend.name))){
        res.status(404).send('Friend not found');
    }
    else
    {
        main.addFriend(friend);
    }
    res.send(main);
});
// gets workout with index and add to workdone sets stats
app.get('/Workout/:id', (req, res) => {
    const index = parseInt(req.params.id);
    let work = fitapp.getWorkout(index);
    const main = fitapp.getMainUser();
    main.addWorkDone(work);
    main.calBurned();
    main.calDeficit();
    res.send(main);
});

// get intake and sets stats
app.get('/calIntake/:food', (req, res) => {
    let food = String(req.params.food);
    const main = fitapp.getMainUser();
    main.addIntake(food);
    main.calIntake();
    main.calDeficit();
    res.send(main);
});

//set MainUser Profile picture
app.post('/ProfilePicture', (req, res) =>{
    const main = fitapp.getMainUser();
    main.ProPic = req.body.ProPic;
    res.send(main);
});
console.log("Controller is running with no erros");

module.exports = app;