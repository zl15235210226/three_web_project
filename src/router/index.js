import Vue from 'vue'
import Router from 'vue-router'
import Home from "../view/Home";
import Login from "../view/Login";
import Register from "../view/Register";
import Forget from "../components/Forget";

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/home",name:"Home",component:Home},
    {path:"/login",name:"Login",component:Login},
    {path:"/register",name:"Register",component:Register},
    {path:"/forget",name:"Forget",component:Forget},
    {path:"/",redirect:"/home"},
  ]
})
