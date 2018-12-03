
const workouts = require('./workouts');

class FitnessApp{
    constructor(){
        this.users = [];
        this.workouts = workouts;
    }

};

class User{
    constructor (name,age){
        this.name = name;
        this.age = age;
    }
}
module.exports = {
    FitnessApp, 
    User
}