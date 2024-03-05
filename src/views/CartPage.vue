<script setup lang="ts">
import { useCartStore } from '@/stores/Cart'
import { storeToRefs } from 'pinia'
import ItemsViewer from '@/components/cart/ItemsViewer.vue'
import CartSummary from '@/components/cart/CartSummary.vue'

const cartStore = useCartStore()
window.scrollTo(0, 0)
const { cartList, token } = storeToRefs(cartStore)
</script>

<template>
  <div class="cartList">
    <div class="container gap-3 flex-column flex-md-row">
      <div class="bg-white rounded-3 p-3 pro">
        <h4 class="fw-semibold border-bottom pb-3 m-0 border-light-subtle">
          Cart-{{ token? cartList?.length : 0 }} items
        </h4>
        <ItemsViewer />
      </div>
      <CartSummary />
    </div>
  </div>
</template>

<style scoped lang="scss">
.cartList {
  background-color: #2a7cc7;
  padding: 20px 0;
  padding-bottom: 70px;

  .container {
    display: flex;
  }
  .pro {
    flex-basis: 65%;
  }
}
</style>
