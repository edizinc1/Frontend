
<template>
  <div class="Products"> 
      <div class="container">

        <h1 class="my-4">{{product.name}}</h1>

        <div class="row">
          <div class="col-md-8">
            <img class="img-fluid" :src="product.imagenUrl" alt="">
          </div>
          <div class="col-md-4">
            <h3 class="my-3">{{product.name}}</h3>
            <p>{{product.description}}</p>
            <h3 class="my-3">Vendedor</h3>
            <p>
            {{product.vendorName}}
            </p>
            <div class="buttonGroup">
              <button v-on:click="saveItem" class="btn btn-primary">Agregar al carrito</button>
            </div>
          </div>
        </div>
        <h3 class="my-4">Related Projects</h3>
        <div class="row d-flex justify-content-around container">
          <Product></Product>
        </div>

      </div>
  </div>
</template>
<script>
import Product from '@/components/Product.vue';
import axios from 'axios'

export default {
    name:'Products',
    data(){
      return{
        product: null,
        idBuy: null,
      }
    },
    created(){
      console.log(window.location.hash.slice(10,window.location.hash.length));
      let productId = window.location.hash.slice(10,window.location.hash.length);
      this.getProduct(productId);
      this.getUserId();
    },
    methods:{
      getProduct(prodId){
        let headers = {
          "Access-Control-Allow-Origin": "*"
        }
        axios.get('http://localhost:3000/api/product/'+prodId, { "headers": headers }).then(
          response => {
            this.product = response.data;
            console.log(this.product);
          }).catch(err => console.log(err));
      },
      getUserId(){
        axios.get('http://localhost:3000/api/session').then(
          response => {
            if(response.data.lastSession){
              this.idBuy = response.data.lastSession;
              console.log(this.idBuy)
            }
            else{
              window.location.href('/#/login');
            }
          }
        )
      },
      saveItem(){
        axios.post('http://localhost:3000/api/saves/item',{
          idBuy: this.idBuy,
          idProd: window.location.hash.slice(10,window.location.hash.length)
        }).then(
          response => {
            window.location = "http://localhost:8080/#/carrito"
          }
        ).catch(error =>{
          console.log(error)
        })
      }
    },
    components:{
        Product
    }
}
</script>
