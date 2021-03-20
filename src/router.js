import Vue from 'vue'
import Router from 'vue-router'
import Landing from './components/Landing.vue'
import Home from './components/Home.vue'

Vue.use(Router);

export default new Router({
    linkExactActiveClass: "active",
    routes: [
      {
        path: "/",
        name: "landing",
        components: {
          default: Landing
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
