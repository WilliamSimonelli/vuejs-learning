<template>
  <div>

    <img alt="Tempura" src="../assets/tempura.png" 
    width="300" 
    height="300"
    >
    <h1> Tempurá 015</h1>
    

    <img alt="Locombia" src="../assets/locomia.png" 
    width="300" 
    height="300"
    >
    <h1> Locombia 017</h1>

    <img alt="Jamanta" src="../assets/jamanta.png" 
    width="300" 
    height="300"
    >
    <h1> Jamanthor 018</h1>
    

  <v-btn @click="call_landing()"> Go back to menue</v-btn>









  </div>
</template>

<script>
export default {

  methods:{
  call_landing(){
    console.log("calling home")
    this.$router.push('/')
  }
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
