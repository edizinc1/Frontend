<template>
  <div class="Carrito">
  <h1>Carrito</h1>
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
      <div class="row justify-content-center" v-if="orders">
        <button class="btn btn-primary" v-on:click="pay">Pagar ahora!</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Carrito",
  data() {
    return {
      orders: null,
      contador: 0,
      total: 0,
      message: null
    };
  },
  created() {
    let route = window.location.href;
    //console.log(route.slice(32,route.length));
    let userId = route.slice(32, route.length);
    this.getUser(userId);
  },
  methods: {
    getUser(usId) {
      axios.get("http://localhost:3000/api/orders/user/" + usId)
        .then((response) => {
          this.orders = response.data.ordsFalse;
          console.log(this.orders);
        });
    },
    pay(){ 
      let route = window.location.href;
      let userId = route.slice(32, route.length);
      axios.post('http://localhost:3000/api/cart/pay',{
        idBuy: userId
      })
      .then(response =>{ 
        window.location = "http://localhost:8080/#/carrito/"+userId;
        this.message = "Muchas gracias por tu compra!";
      }).catch(err =>{
        console.log(err);
      })

    }
  },
};
</script>
