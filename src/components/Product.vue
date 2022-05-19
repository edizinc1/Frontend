<template>
    <div class="Product container row">
        <div class="prod" v-for="product in products" :key="product.id">
            <div class="card col-sm" style="width: 18rem;">
                <img class="card-img-top" :src="product.imagenUrl" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">{{product.name}}</h5>
                    <div class="card-text">
                    <p class="description">
                        {{product.description}}
                    </p>
                    <p class="vendedor">
                        <strong>Vendedor: </strong> {{product.vendorName}}
                    </p>
                </div>
                <a :href="'/#/product/'+product._id" class="btn btn-primary">{{product.price}}$</a>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: 'Product',
 
  data(){
    return{
        products: null,
      }
    }, 
    created(){
        this.getProducts();
    },
    methods:{
        getProducts(){
            axios.get('http://localhost:3000/api/products/all',).then(
                response => {
                    this.products = response.data;
                }).catch(err => console.log(err));
            },
        },
}
</script>