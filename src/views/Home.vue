<template>
    <div class= "Home"> 
        <h1>Home</h1>
    <div class="home">   
    <form id = "RegisterForm" class="container-1">
        <h1>Register</h1> 
        <input 
            type="text"
            v-model="name"
            placeholder="name" />
        <br>
        <br>
        <input
            type= "number"
            v-model="age"
            placeholder="age" />
        <br>
        <br>
       
        <button  @click.prevent ="login()" >
            Submit
        </button>
      
        <br>
    </form>

    <div class="container-2">
        <h1>Main User</h1>
        <div v-for="p in state.MainUser" :key="p.name">
            <h2>
            <i> Welcome {{state.MainUser[0].name}} </i>
            </h2> 
            
             <ul class="navbar-nav">
            <li><a href="/profile">Profile</a></li>
        </ul>
        </div>
    </div>

    <div class="container-3">
        <h1> All Users</h1>
        <div v-for="p in state.users" :key="p.name">
            <h2>
            <i> Welcome {{state.users[0].name}} </i>
            </h2> 
        </div>
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
                name:'',
                users: [],
                MainUser: [],
                
            },
           
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
        login(){
            api.Login(this.name, this.age)
            
            this.refresh()
        },
        profile(){
            api.Profile()
            this.refresh()
        }
    },
}
</script>

<style>
.home{
    display: grid;
    grid-area: home;

    grid-template-areas: 
    'home home home home '
    ' . login login .'
    'mainUser mainUser allUser allUser'
}
.container-1{
    background-color: blue;
    grid-area: login;
}
.container-2{
    background-color:red;
    grid-area: mainUser;
}
.container-3{
    background-color: green;
    grid-area: allUser;
}

ul{
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
}
li a:hover {
    background-color:black;
}

</style>



