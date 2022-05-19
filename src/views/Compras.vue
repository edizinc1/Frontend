<template>
  <div class="Compras">
  <h1>Historial de compras</h1>
    <br />
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Nombre del Producto</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Precio</th>
            <th scope="col">Producto</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ord in orders" :key="ord.id">
            <td>{{ord.objectName}}</td>
            <td>
              {{ord.objectDesc}}
            </td>
            <td>{{ord.objectPrice}}$</td>
            <td>
              <a :href="'/#/product/'+ord.idProd">
                <Button class="btn btn-primary">Ver Producto</Button>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="message" class="alert alert-success">{{message}}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Compras",
  data() {
    return {
      orders: null,
      contador: 0,
      total: 0,
      message: null
    };
  },
  created(){
    let route = window.location.href;
    let userId = route.slice(32, route.length);
    this.getUser(userId);
  },
  methods: {
    getUser(usId) {
      axios.get("http://localhost:3000/api/orders/user/" + usId)
        .then((response) => {
            this.orders = response.data.ordsTrue;
        }).catch(err =>{
            console.log(err)
        });
    },
  },
};
</script>