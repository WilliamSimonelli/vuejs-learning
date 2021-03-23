<template>

  <div>
    <img alt="Rep photo" src="../assets/rota69test.png" width="300" height="175">
    <p>
    <p>
    
  <v-btn @click="func()"
    elevation="2"
    medium
    raised
    rounded
    small
    text
  >Ver nosso logo</v-btn> 
    
    <p>
    <p>
    
    <v-btn @click="func2()"
  elevation="2"
  medium
  raised
  rounded
  small
  text
>clique para ver moradores</v-btn>

    <p>
    <p>
    
    <v-btn @click="func3()"
  elevation="2"
  medium
  raised
  rounded
  small
  text
>clique para ver vuetify</v-btn>

          <div class="text-center">
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="green"
                  dark
                  v-bind="attrs"
                  v-on="on"
                  @click="info()"
                >
                  Ver informações
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
      </div>

  
  </div>

</template>




<script>
export default {
  name: 'App',

  data: () => ({
      items: [
        { title: 'Flyer' },
        { title: 'Entrar em contato' },
        { title: 'Conhcer moradores' },
        { title: 'ver valor' },
      ],
    }),


methods: {
  func(){
    console.log("Chegou aqui")
    this.$router.push('home')
  },
  info(){
    console.log("pega botão")

  },
  func2(){
    console.log("moradores")
    this.$router.push('moradores')
  },
  func3(){
    console.log("HelloWorld")
    this.$router.push('helloworld')
  }
  },
}
</script>




<style>

</style>
