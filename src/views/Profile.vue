<template>
    <div class= "Profile"> 
        <h1 class="profile">Profile</h1>

        <div v-bind="Profile()" class="MainUser">
            <h1>
                 Welcome {{state.MainUser[0].name}}  
            </h1>
            <br>

            <h2>
                  Age {{state.MainUser[0].age}} 
            </h2> 
            <br>

            <h2>
                 Burned Calories  {{state.MainUser[0].Bcal}}  
            </h2> 
            <br>

            <h2>
                Calorie Intake  {{state.MainUser[0].Ical}}  
            </h2> 
            <br>

            <h2>
                 Caloric Deficit  {{state.MainUser[0].calDef}}  
            </h2> 
            <br>

            <h2>
                Friends  {{state.MainUser[0].friends.length}} 
            </h2> 
            <br>

            <h2>
                Workouts Completed  {{state.MainUser[0].workDone.length}} 
            </h2>

            <ul class="navbar-nav">
                <li><a href="">Edit</a></li>
            </ul>
        </div>

        <div class="Find">
            <h1>Workouts</h1>
            <button @click.prevent="addWorkout1()">
                {{state.workouts[0]}}
            </button>
            <br>
            <br>
            <button @click.prevent="addWorkout2()">
                {{state.workouts[1]}}
            </button>
            <br>
            <br>
            <button @click.prevent="addWorkout3()">
                {{state.workouts[2]}}
            </button>
            <br>
            <br>
            <button @click.prevent="addWorkout4()">
                {{state.workouts[3]}}
            </button>
            <br>
            <br>
            <button @click.prevent="addWorkout5()">
                {{state.workouts[4]}}
            </button>
        </div>

        <div>
            <h1>Caloric Intake</h1>
            <input 
                type="text"
                v-model="food"
                placeholder="Food" />
            <br>
            <button @click.prevent="caloricIntake()" type="submit">
                Submit
            </button>
        </div>
               
        </div>

            
        
    </div>
    
</template>

<script>
import * as api from '@/services/api';
let loopTimer = null;

export default {
    data(){
        return{
             state:{
                MainUser : [],
                users : [],
                filterUser : [],
                id: '',
                workouts:[]
            },
            food:''
        }
        
    },
    created(){
       loopTimer = setInterval(this.refresh, 1000)
       this.refresh()
    },
    
    methods: {

        refresh(){
            api.GetState()
            .then(x => this.state = x)
        },
        Profile(){
            api.Profile()
            this.refresh
        },
        addUser(){
            api.findFriend(this.ID)
            .then(x => this.state = x)
            this.refresh()
        },
        addWorkout1(){
            api.workDone(0)
            this.burned()
        }, 
        addWorkout2(){
            api.workDone(1)
            this.burned()
        },
        addWorkout3(){
            api.workDone(2)
            this.burned()
        }, 
        addWorkout4(){
            api.workDone(3)
            this.burned()
        },
        addWorkout5(){
            api.workDone(4)
            this.burned()
        },
        burned (){
            api.calBurn()
            this.refresh()
        },
        caloricIntake(){
            api.intake(this.food)
            this.calDef()
            this.refresh()
        },
        calDef(){
            api.deficit()
            this.refresh()
        }
    },
}
</script>

<style>
.Profile{
    display: grid;
    grid-template-areas:
    'profile profile profile profile'
    'main main findFriend findFriend'
}

.profile{    
    grid-area: profile;
    color: white;
    background-color: black;
}

.MainUser{
    grid-area: main;
    background-color: aqua;
}
.Find{
    grid-area: findFriend;
    background-color:red;
}


.navbar-nav{
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color:aqua;
}
.navbar-nav1{
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color:red;
}

li{
    display:inline-block;
    margin:10px 20px;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    border: 1px solid black;
    background-color: black;
}
li a:hover {
    background-color:white;
    color: black;
}



</style>