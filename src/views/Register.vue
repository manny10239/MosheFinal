<template>
    <div class= "register"> 
        <h1>Register</h1>
    <form id = "RegisterForm" @click.prevent>
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

    <div>
        <h2>
        <i > Welcome {{state.MainUser[0].name}} </i>
        </h2> 
        <button @click.prevent="" >Get Started</button>
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
                isActive: false
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
        login(){
            api.Login(this.name, this.age)
            this.refresh()
        }
    },
}
</script>

<style>

</style>
