const express = require('express');
const { FitnessApp, User} = require('./model');

var fitapp = new FitnessApp();
const app = express.Router();

app.get("/", (req,res) => {
    res.send(fitapp);
});

module.exports = app;