<script setup lang="ts">
import { useCartStore } from '@/stores/Cart'
import { type ProductType } from '@/Types/productsType'
import { storeToRefs } from 'pinia'
import { defineProps, ref } from 'vue'
import { useRouter } from 'vue-router'
import { toast } from 'vue3-toastify'
const cartStore = useCartStore()
const setCart = cartStore.setProductToCart
const count = ref<number>(1)
const { id, token } = storeToRefs(cartStore)
const props = defineProps<{ data: ProductType; name: string }>()
const router = useRouter()

const addProduct = () => {
  if (id.value && token.value) {
    setCart(props.data, count.value, +id.value)
  } else if (!sessionStorage.getItem('token') && sessionStorage.getItem('id')) {
    toast.warning('You have to login first')
    setTimeout(() => {
      router.push('/login')
    }, 3000)
  } else {
    toast.warning('You have to register first')
    setTimeout(() => {
      router.push('/register')
    }, 3000)
  }
}
</script>

<template>
  <button class="btn flex-grow-1 fw-semibold" @click="addProduct()">{{ name }}</button>
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
