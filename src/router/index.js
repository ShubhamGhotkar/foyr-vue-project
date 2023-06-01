import Vue from "vue";
import VueRouter from "vue-router";
import TheHome from "../views/TheHome.vue";
import TheRewards from "../views/TheRewards.vue";
import TheFAQs from "../views/TheFAQs.vue";
import TheTrackProgress from "../views/TheTrackProgress.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
    // name: "home",
    // component: TheHome,
  },
  {
    path: "/home",
    name: "home",
    component: TheHome,
  },
  {
    path: "/faqs",
    name: "faqs",
    component: TheFAQs,
  },
  {
    path: "/reward",
    name: "reward",
    component: TheRewards,
    props: true,
  },
  {
    path: "/track-progress",
    name: "track-progress",
    component: TheTrackProgress,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
