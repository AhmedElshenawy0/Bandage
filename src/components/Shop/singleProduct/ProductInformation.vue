<script setup lang="ts">
import type { ProductType } from '@/Types/productsType'

const props = defineProps<{ product: ProductType }>()
</script>

<template>
  <div class="container row mx-auto my-4 p-0 gap-4 align-items-center">
    <div class="col-md-4 text-center">
      <img :src="product.image" width="200" alt="" />
    </div>
    <div class="col-md-7 text-md-start mt-1">
      <h3 class="fw-bold fs-4 lh-lg m-0">Description</h3>
      <p
        class="fs-bold lh-base"
        style="font-size: 14px; text-align: justify; font-weight: 400; color: #737373"
      >
        {{ props.product.description }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="ts"></style>
