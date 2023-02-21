import SignUpStep1Vue from "@/components/SignUpStep1.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("../components/SignUp.vue"),
      children: [
        {
          path: "",
          name: "step1",
          component: () => import("../components/SignUpStep1.vue"),
        },
        {
          path: "step2",
          name: "step2",
          component: () => import("../components/SignUpStep2.vue"),
        },
      ],
    },
  ],
});

export default router;
