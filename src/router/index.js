import { createRouter, createWebHistory } from "vue-router";
import login from "../views/loginPage.vue";
import signUp from "../views/signupPage.vue";
import profile from "../views/profilePage.vue";
import post from "../views/postPage.vue";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/signup",
      name: "signup",
      component: signUp,
    },
    {
      path: "/login",
      name: "login",
      component: login,
    },
    { path: "/post", name: "post", component: post },
    {
      path: "/profile",
      name: "profile",
      component: profile,
    },
  ],
});

export default router;
