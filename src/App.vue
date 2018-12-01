<template>
  <div id="app" class = "container">
    <div class="display-3">
      <img alt="Vue logo" src="./assets/logo.png" id = "logo">
        <h1>SickFit</h1>
    </div>
    <Nav />
    <router-view/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
  name: 'home',
  components: {
    Nav
  }
}
</script>

<style>

#logo{ 
  height: 150px;
  display:block;
  margin-left:auto;
  margin-right:auto;
  width: 15%;
}
#app{
  text-align: center;
}
</style>
