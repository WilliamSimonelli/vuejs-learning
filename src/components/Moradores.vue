<template>
  <div>

    <img alt="Tempura" 
    src="../assets/tempura.png" 
    width="300" 
    height="500"
    >
  
    

    <h1> Tempurá 015</h1>
    <v-btn @click="Tempura()"
      elevation="2"
      medium
      raised
      rounded
      small
      text
    >Conhecer</v-btn>

    <br>
    <br>
    

    <img alt="Locombia" src="../assets/locomia.png" 
    width="300" 
    height="400"
    >
    <h1> Locombia 017</h1>
    <v-btn @click="loco()"
      elevation="2"
      medium
      raised
      rounded
      small
      text
    >Conhecer</v-btn>

    <br>
    <br>

    <img alt="Jamanta" src="../assets/jamanta.png" 
    width="300" 
    height="300"
    >
    <h1> Jamanthor 018</h1>
    <v-btn @click="jah()"
      elevation="2"
      medium
      raised
      rounded
      small
      text
    >Conhecer</v-btn>

    <br>
    <br>
    

  <v-btn @click="call_landing()"
  elevation="6" rounded> Go back to menue</v-btn>

  <br>
  <br>

  </div>
</template>

<script>
export default {

  methods:{
  call_landing(){
    console.log("calling home")
    this.$router.push('/')
  },
  Tempura(){
    console.log("calling tempura")
    this.$router.push('/moradores/tempura')
  },
  loco(){
    console.log("calling loco")
    this.$router.push('/moradores/locombia')
  },
  jah(){
    console.log("calling jah")
    this.$router.push('/moradores/jamanta')
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
