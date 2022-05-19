import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import axios from 'axios'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/login',
    name:'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path:'/register',
    name:'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path:'/product/:route',
    name:'Products',
    data(){
      this.getRoute();
      return{
        route: null
      }
    },
    component: () => import('../views/Products.vue'),
    methods:{
      getRoute(){
        let headers = {
          "Acces-Control-Allow-Origin": "*"
        }
        axios.get('http://localhost:3000/api/products/all', {"headers": headers}).then(
          response =>{
            this.route = response.data.id;
            console.log(this.route);
        }).catch(err => console.log(err));
      }
    }
  },
  {
    path: '/carrito/:userPath',
    name: 'Carrito',
    data(){
      this.getUser();
      return{
        userPath:null
      }
    },
    methods:{
    getUser(){
        axios.get('http://localhost:3000/api/users', {"headers": headers}).then(
          response =>{
            this.userPath = response.data.id;
            console.log(this.userPath);
        }).catch(err => console.log(err));
      }
    },
    component: () => import('../views/Carrito.vue')
  },
  {
    path:'/perfil/:userPath',
    name: 'Perfil',
    data(){
      this.getUser();
      return{
        userPath: null
      }
    },
    methods:{
      getUser(){
        axios.get('http://localhost:3000/api/users', {"headers": headers}).then(
          response =>{
            this.userPath = response.data.id;
            console.log(this.userPath);
        }).catch(err => console.log(err));
      }
    },
    component: () => import('../views/Perfil.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/adminusers',
    name: 'DeleteUsers',
    component: () => import('../views/DeleteUsers.vue')
  },
  {
    path: '/adminusers/delete/:userPath',
    name: 'DeleteUs',
    data(){
      this.getUser();
      return{
        userPath:null
      }
    },
    methods:{
      getUser(){
        axios.get('http://localhost:3000/api/users', {"headers": headers}).then(
          response =>{
            this.userPath = response.data.id;
            console.log(this.userPath);
        }).catch(err => console.log(err));
      }
    },
    component: () => import('../views/DeleteUs.vue')
  },
  {
    path: '/compras/:userPath',
    name: 'Compras',
    data(){
      this.getUser();
      return{
        userPath:null
      }
    },
    methods:{
    getUser(){
        axios.get('http://localhost:3000/api/users', {"headers": headers}).then(
          response =>{
            this.userPath = response.data.id;
            console.log(this.userPath);
        }).catch(err => console.log(err));
      }
    },
    component: () => import('../views/Compras.vue')
  },
  {
    path:'/new/product',
    name:'NewProduct',
    component: () => import('../views/NewProduct.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
