<template>
  <div class="home">
    <div class="container">
      <!--<Carousel></Carousel>-->
    </div>
    <div class="container">
        <Product></Product>
    </div>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import Product from '@/components/Product.vue'
import axios from 'axios'

export default {
  name:'Home',
  components: {
    Carousel,
    Product
  },
}
</script>
