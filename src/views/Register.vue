<template>
    <div class= "register"> 
        <h1>Register</h1>

        <input 
            type="name"
            name="name"
            v-model="name"
            placeholder="name" />
        <br>
        <br>
        <input
            type="age"
            name="age"
            v-model="age"
            placeholder="age" />
        <br>
        <br>
        <button @Click ="register">
            Submit
        </button>

    </div>
    
</template>

<script>
import Authentication from '@/services/Authentication'

export default {
    data(){
        return{
            name:'',
            age: ''
        }
    },
    methods: {
    async register(){
           const response = await Authentication.register({
                name: this.name,
                age: this.age
            })
            console.log(response.data);
        }
    }
}
</script>

<style>

</style>
