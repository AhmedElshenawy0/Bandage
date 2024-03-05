<script setup lang="ts">
import { useCartStore } from '@/stores/Cart'
import { type ProductType } from '@/Types/productsType'
import { defineProps, ref } from 'vue'
const cartStore = useCartStore()
const setCart = cartStore.setProductToCart
const count = ref<number>(1)
const props = defineProps<{ data: ProductType; name: string }>()
</script>

<template>
  <button class="btn flex-grow-1 fw-semibold" @click="setCart(data,count)">{{ name }}</button>
</template>

<style scoped lang="scss">
.btn {
  border: 1px solid blue;
  transition: all 0.3s linear;
  font-size: 14px;
  width: 50%;
}
.btn:hover {
  color: white;
  background-color: blue;
}
</style>
