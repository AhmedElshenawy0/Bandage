<script setup lang="ts">
import { useCartStore } from '@/stores/Cart'
import { storeToRefs } from 'pinia'

const cartStore = useCartStore()

const { cartList, token } = storeToRefs(cartStore)
import { computed, ref } from 'vue'

const total = computed((): number => {
  return cartList.value.reduce((acc, cur) => (acc += cur.price * cur.rating.count), 0)
})

const shipping = ref<number>(20)
</script>

<template>
  <div class="bg-white py-3 px-3 rounded-3 summary">
    <h4 class="fw-semibold border-bottom pb-3 border-light-subtle">Summary</h4>
    <div
      class="text-secondary fw-semibold d-flex justify-content-between align-items-center border-bottom mb-1"
    >
      <p>Subtotal</p>
      <p>${{ token ? total.toFixed(2) : 0 }}</p>
    </div>
    <div
      class="text-secondary fw-semibold d-flex justify-content-between align-items-center border-bottom mb-1"
    >
      <p>Shipping</p>
      <p>${{ token ? shipping.toFixed(2) : 0 }}</p>
    </div>
    <div class="fw-semibold d-flex justify-content-between align-items-center">
      <p>Total amount</p>
      <p>${{ token ? (total + shipping).toFixed(2) : 0 }}</p>
    </div>
    <button
      class="check btn btn-primary border-0 rounded-1 text-white w-100 fw-semibold position-relative d-flex justify-content-center"
    >
      <p class="m-0 me-3">GO TO CHECKOUT</p>
      <svg xmlns="http://www.w3.org/2000/svg" class="" height="12" viewBox="0 0 512 512">
        <path
          fill="#ffffff"
          d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
        />
      </svg>
    </button>
  </div>
</template>

<style scoped lang="scss">
.summary {
  flex-basis: 30%;
  height: fit-content;

  .check {
    font-size: 13px;
  }
  .check svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
    transition: 0.5s;
  }
  .check:hover svg {
    right: 10px;
  }
}
</style>
