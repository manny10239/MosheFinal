
const workouts = require('./workouts');

class FitnessApp{
    constructor(){
        this.MainUser = [];
        this.users = [];
        this.workouts = workouts;
        this.filterUser = [];
        
    }

};

module.exports = {
    FitnessApp
}