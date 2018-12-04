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
                        Burned Calories : {{p.Bcal}} <br>
                        Calorie Intake : {{p.Ical}} <br>
                        Caloric Deficit : {{p.calDef}} <br>
                        Friends : {{p.friends.length}} <br>
                        WorkOut Completed : {{p.workDone.length}} <br>
                    </h4>
                  </div>
                </div>
            </div>
        </div>
        
        <div>
            <input
                type= "number"
                v-model="weight"
                placeholder="weight"
            />
            <button @click.prevent = "BMI()" type="submit"> Submit</button>
            
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
        BMI(){
            
        }
    }
}
</script>

<style>


.List h1{
    border: 2px solid black;
}
.List{
    color: black;
    background-color: red;
    float: left;
}
.fcontainer{
    border: 2px dashed black;
}
</style>