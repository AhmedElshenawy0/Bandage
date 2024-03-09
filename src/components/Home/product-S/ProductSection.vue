<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useProductStore } from '@/stores/product'
import { onMounted } from 'vue'
import ProductCard from './ProductCard.vue'
import { RouterLink } from 'vue-router'

const productStore = useProductStore()
const { limitedProducts } = storeToRefs(productStore)

const getLimitProducts = productStore.getLimitProducts

onMounted(() => {
  getLimitProducts()
})
</script>
<template>
  <div class="container">
    <div class="mb-5 text-center">
      <h4>Featured Products</h4>
      <h3>BESTSELLER PRODUCTS</h3>
      <P>Problems trying to resolve the conflict between </P>
    </div>
    <div>
      <div class="row">
        <ProductCard v-for="product in limitedProducts" :key="product.id" :data="product" />
      </div>

      <RouterLink to="/" class="text-decoration-none text-center d-block load"
        >LOAD MORE PRODUCTS</RouterLink
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/sass/main.scss';
.container {
  margin: 80px auto;

  h4 {
    font-weight: 400;
    font-size: 20px;
    color: $p-color;
  }
  h3 {
    font-weight: 700;
    font-size: 24px;
    color: #252b42;
    margin: 10px 0;
  }
  p {
    font-size: 14px;
    font-weight: 500;
    color: $p-color;
  }

  .row {
    row-gap: 20px;
    column-gap: 10px;
    justify-content: space-between;
  }

  .load {
    margin: 30px auto;
    text-align: center;
    padding: 15px 45px;
    border: 1px solid #23a6f0;
    color: #23a6f0;
    font-weight: 700;
    font-size: 14px;
    width: fit-content;
    transition: all 0.5s ease;
  }
  .load:hover {
    background-color: #23a6f0;
    color: #fff;
  }
}
.Toastify__toast-container {
  background-color: red;
}
</style>
