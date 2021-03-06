import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Meetups from "@/components/Meetup/Meetups";
import CreateMeetup from "@/components/Meetup/CreateMeetup";
import Profile from "@/components/User/Profile";
import Signup from "@/components/User/Signup";
import Signin from "@/components/User/Signin";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Hello",
      component: Home
    },
    {
      path: "/meetups",
      name: "Meetups",
      component: Meetups
    },
    {
      path: "/meetups/new",
      name: "Create Meetup",
      component: CreateMeetup
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile
    },
    {
      path: "/signup",
      name: "Signup",
      component: Signup
    },
    {
      path: "/signin",
      name: "Signin",
      component: Signin
    }
  ],
  mode: 'history'
});
