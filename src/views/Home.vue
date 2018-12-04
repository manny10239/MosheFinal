<template>
    <div class= "Home"> 
        <h1>Home</h1>

    <div class="home">   
    <form id = "RegisterForm" class="container-1">
        <h1 class="inv">Register</h1> 
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
         <div v-for="p in state.MainUser" >
            <h2>
            <i> Welcome {{p.name}} 
                <br>
                Age: {{p.age}}  ID:{{p.id}}</i>
            </h2> 
         </div>

        
            <ul class="navbar-nav">
                <li><a href="/profile"> Edit Profile</a></li>
            </ul>
        
    </div>

    <div class="container-3">
        <h1 class="inv"> All Users</h1>
        <div v-for="p in state.filterUser" >
            <h2>
            <i> {{p.name}} {{p.age}} </i>
            </h2> 
        </div>
    </div>

    <div class="container-4">
        <h1>Welcome To SickFit</h1>
        <p><strong>Ready to get so fit youll <br>
            be sick... welll i am,
            Welcome to Sickfit where <br>
             all the test are mentally 
            challenging and where youll<br>
             learn to push yourself 
            to the limit. Register now so <br>
            we can track you Intake
            Caloric Deficit and much more.<br>
             This is a competative 
            enviroment but please dont be shy <br>
            to add friends once 
            you register. Dont forget to set up <br>
            you profile picture</strong></p>
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
                
            },
           isActive: true,
        }
    },
    created(){
        loopTimer = setInterval(this.refresh, 1000)
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
        },
        takePicture(){
            <picture-taker></picture-taker> 
        }
    },
}
</script>

<style scoped>
p{
    padding :10px;
}
.Home{
    background-color: white;
}
.inv{
    border: 2px solid white;
}
.home{
    display: grid;
    grid-area: home;

    grid-template-areas: 
    'home home home home '
    ' login login sickfit sickfit '
    ' login login sickfit sickfit'
    'mainUser mainUser allUser allUser'
}
.container-4{
    background-color: red;
    color: black;
    
    grid-area: sickfit;
}
.container-1{
    background-color:black;
    color:white;
   
    grid-area: login;
}
.container-2{
    background-color:red;
    
    grid-area: mainUser;
}
.container-3{
    background-color:black;
    color:white;
   
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
    margin:25px 20px;
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
    background-color:white;
}
*{
    margin:5px;
}
h1{
    border: 2px solid black;
}


</style>



