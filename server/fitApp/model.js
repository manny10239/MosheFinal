const workouts = require('./workouts');

class FitnessApp{

    constructor(){
        this.workouts = workouts;
        this.users = [];
        this.MainUser = [];

    }

    login(name,age,height,weight){
        let user = new User(name,age,height,weight)
        if(this.MainUser.length == 0){
            user.setID(this.MainUser.length + this.users.length + 1);
            this.MainUser.push(user);
            console.log("added to main user");
        }
        else{
            user.setID(this.MainUser.length + this.users.length + 1);
            this.users.push(user);
            console.log("added to all users");
        }
        return user;
    }
    getWorkout(x){
        var work = this.workouts[x];
        return (work);
    }
    getMainUser(){
        return this.MainUser[0];
    }
    getUsers(){
        return this.users;
    }
}

class User {
    constructor(name, age, height, weight){
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.id = 0;
        this.friends = [];
        this.calB = 0;
        this.calI = 0;
        this.calD = 0;
        this.intake = [];
        this.workDone = [];
        this.ProPic = null;
    }
    addFriend(User){
        this.friends.push(User);
    }  
    calDeficit(){
        this.calD = this.calI - this.calB;
    }
    calBurned(){
        this.calB = this.workDone.length * 300;
    }
    calIntake(){
        this.calI = this.intake.length * 200;
    }
    addWorkDone(x){
        this.workDone.push(x);
    }
    addIntake(x){
        this.intake.push(x);
    }

    // getters and setters
    getIntake(x){
        return this.intake[x];
    }
    getWorkdone(x){
        return this.workDone[x];
    }
   
    
    getName(){
        return this.name;
    }
    getAge(){
        return this.Age;
    }
    getHeight(){
        return this.height;
    }
    getWeight(){
        return this.weight;
    }
    getID(){
        return this.id;
    }
    setID(x){
        this.id = x;
    }
    setName(x){
        this.name = x;
    }
    setAge(x){
        this.age = x;
    }
    setHeight(x){
        this.height = x;
    }
    setWeight(x){
        this.weight = x;
    }
    
}

console.log("Model is running with no errors");

module.exports = {
    FitnessApp, User
}