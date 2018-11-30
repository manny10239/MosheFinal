
const workouts = require('./workouts');

class FitnessApp{
    constructor(){
        this.users = [];
        this.workouts = workouts;
    }

    login(name,age){
        let user = new User(name.age);
        this.users.push(user);
        return user;
    }
}

class User {
    contructor(name, age){
        this.name = name;
        this.age = age;
    }
}
module.exports = {
    FitnessApp, 
    User
}