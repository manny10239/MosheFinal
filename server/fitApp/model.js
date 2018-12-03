
const workouts = require('./workouts');

class FitnessApp{
    constructor(){
        this.MainUser = [];
        this.users = [];
        this.workouts = workouts;
        this.calB = 0;
        this.calA = 0;
        this.calD = 0;
    }

};

class User{
    constructor (name,age){
        this.name = name;
        this.age = age;
        this.friends = [];

    }
}
module.exports = {
    FitnessApp, 
    User
}