<template>

  <div>
    <img alt="Vue logo" src="../assets/rota69test.png">
 
      <button @click="func()"> click here</button>


          <div class="text-center">
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  Dropdown
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
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    }),


methods: {
  func(){
    console.log("Chegou aqui")
    this.$router.push('home')
  }

  },
}



</script>

<style>

</style>
