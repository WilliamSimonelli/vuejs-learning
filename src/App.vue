 <template>
 <body>
   
 
  <v-app>
    <div>
      <v-app-bar
        
        color="green"
        absolute
        dense
        dark
        elevation="18"
        style="top: -60px;"
        scroll-off-screen = "true"
        
      >
      <v-app-bar-nav-icon>
        
      </v-app-bar-nav-icon>

      <v-toolbar-title
      >
      ROTA 69 - App dos brother
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            
            @click="() => {}"
            
          >
            <v-list-item-title>selecione {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
  </body>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
  methods:{
    func(){
      console.log("aloooo")
    }
  }
};
</script>

<style >

</style>
