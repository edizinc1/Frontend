<template>
  <div class="DeleteUsers">
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Nombre del Usuario</th>
            <th scope="col">Email</th>
            <th scope="col">Tipo de usuario</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="us in users" :key="us.id">
            <td>{{us.name}}</td>
            <td>{{us.email}}</td>
            <td>{{us.type}}</td>
            <td>
            <a :href="'/#/adminusers/delete/'+us._id">
              <Button class="btn btn-danger">Eliminar Usuario</Button>
            </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: "DeleteUsers",
  data(){
      return{
          users: null
      }
  },
  created(){
      this.getUsers()
  },
  methods:{
      getUsers(){
          axios.get('http://localhost:3000/api/users').then(
              response => {
                  this.users = response.data;
                  console.log(this.users)
              }
          )
      }
  }
}

</script>
