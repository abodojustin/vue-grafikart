import Vue from "vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import App from "./App.vue";
import HelloWorld from "./components/HelloWorld.vue";
import PageA from "./components/PageA.vue";
import PageB from "./components/PageB.vue";
import PageC from "./components/PageC.vue";

Vue.config.productionTip = false;

Vue.use(VueResource);

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: HelloWorld,
      name: "root",
    },
    {
      path: "/a",
      component: PageA,
      name: "a",
      children: [
        {
          path: "b",
          component: PageB,
          name: "a.b",
        },
        {
          path: "c",
          component: PageC,
          name: "a.c",
        },
      ],
    },
    {
      path: "/article/:id(\\d+)",
      component: PageA,
      name: "post",
    },
    {
      path: "*",
      redirect: "/",
    },
  ],
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
