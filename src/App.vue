<template>
  <v-app>
    <v-app-bar
      app
      color="green"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Rota Logo"
          class="shrink mr-2"
          contain
          src="../src/assets/rotaLogo.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="app dos brother"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="../src/assets/appdosbrod.png"
          width="300"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://www.facebook.com/RepublicaRota69/"
        target="_blank"
        text
      >
        <span class="mr-2">Nossa página</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style >
  #app {
  background: left 5% / 15% 60% repeat-x src("../src/assent/rotaLogo.png");
}
</style>
