<template>
    <div class="Perfil">
        <div class="header container">
            <div class="container row justify">
                <div class="image col-sm">
                    <img class="imagePerfil" src="https://covitalidad.edu.umh.es/wp-content/uploads/sites/1352/2018/06/default-user.png" alt="">
                </div>
            </div>
            <div class="vendorName col-sm">
                    <h1 class="name">
                    Nombre Usuario: 
                        {{user.name}}
                    </h1>
                    <h3>
                        Descripcion del usuario:                       
                    </h3>
                    <h5>Tipo de usuario: {{user.type}}</h5>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'perfil',
    data(){
        return{
            user: null
        }
    },
    created(){
        console.log(window.location.hash.slice(9,window.location.hash.length));
        let userId = window.location.hash.slice(9,window.location.hash.length);
        this.getUser(userId);
    },
    methods:{
        getUser(usId){
        let headers = {
          "Access-Control-Allow-Origin": "*"
        }
        axios.get('http://localhost:3000/api/user/'+usId, { "headers": headers }).then(
          response => {
            this.user = response.data;
            console.log(this.user);
          }).catch(err => console.log(err));
      },
      getSession(){
          let headers = {
          "Access-Control-Allow-Origin": "*"
        }
        axios.get('http://localhost:3000/api/user/'+usId, { "headers": headers }).then(
          response => {
            this.user = response.data;
            console.log(this.user);
          }).catch(err => console.log(err));
      }
    }
}
</script>

<style>
    .imagePerfil{
        height: 200px;
        width: 200px;
    }
</style>