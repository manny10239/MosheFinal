<template>
    <div class= "Profile"> 
        <h1 class="profile">Profile</h1>

        <div class="home">
        <div v-bind="Profile()" class="MainUser">
            <h1 class="wel">
                 Sick Fit {{state.MainUser[0].name}}  
            </h1>
            <br>
            <div class="user">
            <h3>
                  Age : {{state.MainUser[0].age}} 
            </h3> 
            <br>
            <h3>
                 Height : {{state.MainUser[0].height}}  
            </h3> 
            <br>
            <h3>
                 Weight : {{state.MainUser[0].weight}}  
            </h3> 
            <br>
            <h3>
                 Burned Calories : {{state.MainUser[0].calB}}  
            </h3> 
            <br>
            <h3>
                Calorie Intake : {{state.MainUser[0].calI}}  
            </h3> 
            <br>
            <h3>
                 Caloric Deficit : {{state.MainUser[0].calD}}  
            </h3> 
            <br>
            <h3>
                Friends : {{state.MainUser[0].friends.length}} 
            </h3> 
            <br>
            <h3>
               Last Workouts Completed : {{state.MainUser[0].workDone[index]}} 
            <br>
            </h3>
            <br>
            <h3>
                Workouts Completed : {{state.MainUser[0].workDone.length}} 
            </h3>
            </div>

            <div class="friendsList">
                <h1>Friends List</h1>
                <div v-for="p in state.MainUser[0].friends">
                    <h4>
                    <li>
                        <a href="/about"> {{p.name }}  {{p.age}}  ID: {{p.id}}</a>
                    </li>
                    </h4>
                </div>
            </div>
            

        </div>
          
        <div class="Workout">
            <h1 class="work">Workouts</h1>
            <button @click.prevent="addWorkout1()" class="btn">
               0.  {{state.workouts[0]}}
            </button>
            <br>
            <br>
            <button @click.prevent="addWorkout2()" class="btn">
               1.  {{state.workouts[1]}}
            </button>
            <br>
            <br>
            <button @click.prevent="addWorkout3()" class="btn">
               2.  {{state.workouts[2]}}
            </button>
            <br>
            <br>
            <button @click.prevent="addWorkout4()" class="btn">
               3.  {{state.workouts[3]}}
            </button>
            <br>
            <br>
            <button @click.prevent="addWorkout5()" class="btn">
                4.  {{state.workouts[4]}}
            </button>
        </div>

        <div class="caloric">
            <h1 class="calI">Caloric Intake</h1>
            <input 
                type="text"
                v-model="food"
                placeholder="Food" />
            <br>
            <button @click.prevent="calIntake()" type="submit">
                Submit
            </button>
           
        </div>
            
        

        <div class="idFriend">
            <h1 class="addId"> Add WorkOut</h1>
            <input 
                type="number"
                v-model="workId"
                placeholder="Add Workout Number" >
                <br>
                <button class="btnn" @click.prevent="addWorkoutId()" type="submit">
                    Add Workout
                </button>   
        </div>

        <div class="FindFriend">
            <h1 class="nameFriend"> Add Friend Name</h1>
            <input 
                type="text"
                v-model="findName"
                placeholder="Find Friend with Name" >
                <br>
                <button @click.prevent="addFriendName()" type="submit">
                    Add Friend
                </button>   
        </div>

        <div class="container-5">
        <img alt="SickFit logo" src="@/assets/logo.png" id = "logo">
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
                workouts:[],
                intake: []
               
                
            },
            food: '',
            findName:'',
            workId: 0,
            index: 0
            
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
            this.calDef()
            this.refresh
        },
        addFriendName(){
            api.addName(this.findName)
            this.Profile()
            this.refresh()
        },
        addWorkoutId(){
            api.workDone(this.workId)
            this.index++
            this.refresh()
        },
        
        calIntake(){
            api.calIntake(this.food)
            this.Profile()
            this.refresh()
            
        },
        calDef(){
            api.deficit()
            this.refresh()
        },
        friendsList(){
            api.getFriends()
            this.fresh()
        }
    },
}
</script>

<style>

.home{
    display: grid;
    grid-area: home;
    grid-template-areas: 
    ' main  main  main'
    '. logo .'
    'workout intake name'
    'Id Id Id'
    
}
.profile{  
    background-color:white;
    border: 2px solid black;
    padding:10px;
    text-align: center;
    grid-area: pro;
   
}

.MainUser{
    grid-area: main;
    background-color:black;
    color:white;
}
.Workout{
    grid-area: workout;
    background-color:red;
}
.work{
    border: 2px solid black;
    padding: 10px;
}

.navbar-nav{
    list-style-type: none;
    overflow: hidden;
    background-color:black;
    color: white;
    float: none;
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
    border: 2px dashed white;
    background-color: black;
}
li a:hover {
    background-color:white;
    color: black;
}

.btn{
    background-color:black; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 13px;
    
}
*{
    margin:5px;
}
.wel{
    padding: 10px;
    border: 2px solid white;
}
.caloric{
    grid-area: intake;
    background-color:red;

}
.calI{
    border: 2px solid black;
    padding:10px;
}
button{
    background-color:black; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 13px;
}
.btnn{
    background-color:white; /* Green */
    border: none;
    color:black;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 13px;
}
.idFriend{
    background-color: black;
    grid-area:Id;
}
.addId{
    border: 2px solid white;
    padding:10px;
    color: white;
}
.FindFriend{
    grid-area: name;
    background-color:red;
}
.nameFriend{
    border: 2px solid black;
    padding:10px;
    color: black;
}
.container-5{
    grid-area: logo;
    min-height: 200px;
    min-width: 20%;
}
h3{
    text-align: left;
    padding-left: 25px;
}
.user{
    float: left;
}
.friendsList{
    text-align: right;
    padding-right: 30px;
    margin-top:20px;
    
}

</style>