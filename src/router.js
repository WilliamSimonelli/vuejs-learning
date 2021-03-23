import Vue from 'vue'
import Router from 'vue-router'
import Landing from './components/Landing.vue'
import Home from './components/Home.vue'
import Moradores from './components/Moradores.vue'
import HelloWorld from './components/HelloWorld'

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
      {
        path: "/moradores",
        name: "moradores",
        components: {
          default: Moradores
        }
      },
      {
        path: "/helloworld",
        name: "helloworld",
        components: {
          default: HelloWorld
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
