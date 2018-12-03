<template>
    <div class= "Profile"> 
        <h1 class="profile">Profile</h1>

        <div v-bind="Profile()" class="MainUser">
            <h2>
                <i> Welcome {{state.MainUser[0].name}}  </i>
            </h2>
            <br>

            <h2>
                 <i> Age {{state.MainUser[0].age}}  </i>
            </h2> 

            <br>

            <h2>
                <i> Burned Calories  {{state.MainUser[0].calB}}  </i>
            </h2> 

            <br>

            <h2>
                <i> Calorie Intake  {{state.MainUser[0].calA}}  </i>
            </h2> 

            <br>

            <h2>
                <i> Caloric Deficit  {{state.MainUser[0].calD}}  </i>
            </h2> 
            <br>
            <h2>
                <i> Friends  {{state.MainUser[0].friends.length}}  </i>
            </h2> 

            <ul class="navbar-nav">
                <li><a href="">Edit</a></li>
            </ul>
        </div>

        <div class="Find">
            <h1> Add Friend</h1>

            <input 
            type="text"
            v-model="name"
            placeholder="Search Friend Name" />
            <br>

            <button @click.prevent ="AddUser()">
                Find
            </button>

            <div v-for="p in state.MainUser[0].friends" :key="p.name">
            <h2>
            <i> Welcome {{state.MainUser[0].friends.name}} </i>
            </h2> 
            </div>
            
        </div>

    
    
    
    </div>
    
</template>

<script>
import * as api from '@/services/api';

export default {
    data(){
        return{
            state:{
                name : this.name,
                MainUser : this.MainUser
            }
        }
        
    },
    created(){
       this.refresh()
    },
    
    methods: {

        refresh(){
            api.GetState()
            .then(x => this.state = x)
        },
        Profile(){
            api.Profile()
        },
        AddUser(){
            api.findFriend(this.name)
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