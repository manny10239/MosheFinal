
const workouts = require('./workouts');

class FitnessApp{
    constructor(){
        this.MainUser = [];
        this.users = [];
        this.workouts = workouts;
        
    }

};

class User{
    constructor (name,age){
        this.name = name;
        this.age = age;
        this.friends = [];
        this.calB = 0;
        this.calA = 0;
        this.calD = 0;

    }
}
module.exports = {
    FitnessApp, 
    User
}