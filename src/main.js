import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import firebase from 'firebase'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

var firebaseConfig = {
  apiKey: "AIzaSyAls-aZ8JtDXUhte6gp31EoTiA6Stjtpt0",
  authDomain: "ecomes-210d4.firebaseapp.com",
  databaseURL: "https://ecomes-210d4.firebaseio.com",
  projectId: "ecomes-210d4",
  storageBucket: "ecomes-210d4.appspot.com",
  messagingSenderId: "1058963565761",
  appId: "1:1058963565761:web:d4aafdd3191072d7aa7840",
  measurementId: "G-3YGWW2G0KK"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(axios, VueAxios)
Vue.use(BootstrapVueIcons)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
