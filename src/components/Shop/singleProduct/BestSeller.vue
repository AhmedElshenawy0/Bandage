<template>
  <div class="best-seller py-5">
    <div class="container" >
      <h3 class="fs-4 text-center text-md-start fs-bold lh-lg">BETSELLER PRODUCTS</h3>
      <hr>
      <div class="row">
        <ProductCard v-for="product in limitedProducts" :key="product.id" :data="product" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductCard from '@/components/Home/product-S/ProductCard.vue'
import { useProductStore } from '@/stores/product'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const productStore = useProductStore()
const { limitedProducts } = storeToRefs(productStore)
const getproducts = productStore.getLimitProducts

onMounted(() => {
  getproducts()
})
</script>

<style scoped lang="scss">
.best-seller{
    background-color: #fafafa;
}
</style>
