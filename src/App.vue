<template>

  <v-app>

  <div id="app">
    <img alt="Vue logo" src="./assets/rota69test.png">
    <HelloWorld msg="Vue JS learning."/>
    <button @click="func"> click here</button>
  </div>
  
    <div>
      <router-view></router-view>
    </div>

  </v-app>

</template>

<script>

import HelloWorld from './components/HelloWorld.vue'


export default {
  name: 'App',
  components: {
    HelloWorld
  },

methods:{
  func(){
    console.log("Chegou aqui")
    this.$router.push('home')
  }

  }
}



</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
