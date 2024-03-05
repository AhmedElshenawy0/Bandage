<template>
  <div class="row">
    <div class="d-flex justify-content-between mb-4">
      <h3>Jewelery's clothing</h3>

      <div class="select-container">
        <input type="search" placeholder="Search" v-model="name" />
      </div>
    </div>
    <ProductCard v-for="product in fileringProducts" :key="product.id" :data="product" />
  </div>
</template>

<script setup lang="ts">
import ProductCard from '@/components/Home/product-S/ProductCard.vue'
import { useProductStore } from '@/stores/product'
import { storeToRefs } from 'pinia'
import { computed, onMounted, ref } from 'vue'

const productStore = useProductStore()

const getProducts = productStore.getjeweleryProducts

const { jeweleryProducts } = storeToRefs(productStore)

// Fetch jewelery products onMounted
onMounted(() => {
  getProducts()
})

const name = ref<string>('')

const fileringProducts = computed(() => {
  return name.value
    ? jeweleryProducts.value.filter((ele) =>
        ele.title.toLowerCase().startsWith(name.value.toLowerCase())
      )
    : jeweleryProducts.value
})
</script>

<style scoped lang="scss">
@import '@/assets/sass/main.scss';
.select-container input {
  outline: none;
  border-radius: 5px;
  border: 1px solid $main-color;
  padding: 5px;
  color: $main-color;
}
h3 {
  font-size: 18px;
  height: fit-content;
}
</style>
