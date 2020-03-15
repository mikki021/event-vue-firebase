import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import { EventList, CreateEvent } from "../components/event";
import { Profile, SignIn, SignUp } from "../components/user";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/events",
    name: "Events",
    component: EventList
  },
  {
    path: "/events/new",
    name: "Add Event",
    component: CreateEvent
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/sign-in",
    name: "Sign In",
    component: SignIn
  },
  {
    path: "/sign-up",
    name: "Sign Up",
    component: SignUp
  }
];

const router = new VueRouter({
  routes
});

export default router;
