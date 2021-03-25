<template>
  <div id="app2">
    <img alt="Vue logo" src="../assets/rotaLogo.png" width="400" height="400">

    <br><br>

    <v-btn @click="backHome()"
      elevation="6" 
      rounded> 
      Go back to menue
    </v-btn>
  </div>

</template>

<script>



export default {

  methods: {
    backHome (){
      console.log("calling home")
      this.$router.push('/')
    },
  },
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
