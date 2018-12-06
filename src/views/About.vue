<template>
    <div class= "about">
        <h1> Friends </h1>

        <div v-bind="Profile()" class="Friends">
            <div class="List">
                <h1>Friends Info</h1>
                <div v-for="p in state.MainUser[0].friends">
                   <h1> {{p.name}} </h1> 
                   <div class="fcontainer">  
                    <h4>
                        Age : {{p.age}} <br>
                        Height: {{p.height}}<br>
                        Weight: {{p.weight}}<br>
                        Burned Calories : {{p.calB}} <br>
                        Calorie Intake : {{p.calI}} <br>
                        Caloric Deficit : {{p.calD}} <br>
                        Friends : {{p.friends.length}} <br>
                        WorkOut Completed : {{p.workDone.length}} <br>
                    </h4>
                  </div>
                </div>
            </div>
        </div>

         <div class="container-1">
             <h1> {{state.MainUser[0].name}}'s Intake Data </h1>
            <div class="container-2">
                <h4>
                    <i v-for="p in state.MainUser[0].intake" :key="p.food" >
                        {{p}} <br>
                    </i>
                </h4>
            </div>
        </div>

       <div class="container-3">
             <h1> {{state.MainUser[0].name}}'S Workout History </h1>
            <div class="container-4">
                <h4>
                    <i v-for="p in state.MainUser[0].workDone" :key="p.text" >
                        {{p}} <br>
                    </i>
                </h4>
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
            food:'',
            findId:0,
            findName:'',
            friendId:0
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
        
    }
}
</script>

<style>
.container-3{
    background-color: red;
    color: black;
    float: right;
    width: 50%;
}
.container-3 h1{
    border: 2px solid black;
}
.container-4{
    text-align: left;
    padding: 20px;
}

.container-1{
    background-color: black;
    color: white;
    float: left;
    width: 48%;
}
.container-1 h1{
    border: 2px solid white;
    padding: 20 px;
}
.container-2{
    text-align: left;
    padding: 10px;
}
.List h1{
    border: 2px solid black;
}
.List{
    color: black;
    background-color: red;
    
}
.fcontainer{
    border: 2px solid black;
}
i{
    margin: 5px;
    font-size: 20px;
}
</style>