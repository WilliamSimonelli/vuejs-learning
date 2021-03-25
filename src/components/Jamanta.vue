<template>

  <div>
    
      <img 
      alt="Jamanta" 
        src="../assets/jamanta.png" 
        width="300" 
        height="300"
      >

      <h1> Jamanthor 018</h1>
      <br>

      <h3
      style="color: purple;"
      > MEU GRANDE AMOR S2.</h3>
      
      <br>
      <v-row justify="center">
        <h2> telefone: </h2> <h3>--------</h3>
      </v-row>

      <br>
    
    <v-row justify="center">
      <h2> email: </h2> <h3>--------</h3>
    </v-row>

      <br>
      <br>


    <v-btn @click="backHome()"
      elevation="6" 
      rounded> 
      Go back
    </v-btn>
    </div>

</template>

<script>
  export default {
    methods: {
      backHome (){
      console.log("calling moradores")
      this.$router.push('/moradores')
    },
  },



  }
</script>




<style>

</style>
