<template>

  <div>
    
    <img alt="Tempura" src="../assets/tempura.png" 
      width="300" 
      height="300"
    >
    <h1> Tempurá 015</h1>
    <br>

    <h3> bla bla bla bla bla.</h3>
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
