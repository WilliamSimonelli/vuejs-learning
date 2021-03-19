import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Home from './Home.vue'

Vue.use(Router);

export default new Router({
    linkExactActiveClass: "active",
    routes: [
      {
        path: "/",
        name: "app",
        components: {
          default: App
        }
      },
      {
        path: "/home",
        name: "home",
        components: {
          default: Home
        }
      },
    ],
    scrollBehavior: to => {
      if (to.hash) {
        return { selector: to.hash };
      } else {
        return { x: 0, y: 0 };
      }
    }
});
