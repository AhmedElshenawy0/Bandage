<script setup lang="ts">
import { type ProductType } from '@/Types/productsType'
import AddButton from '@/components/global/buttons/AddButton.vue'

const props = defineProps<{ product: ProductType }>()
</script>

<template>
  <div class="main-bg">
    <div class="row mt-2 gap-3 gap-lg-0 container py-5 mx-auto p-0">
      <div class="col-md-3 mx-auto image w-50 d-flex justify-content-center">
        <img :src="props.product.image" alt="" />
      </div>
      <div class="col-md-5">
        <h4>{{ props.product.title }}</h4>
        <div>
          <span>stars</span> <span>{{ props.product.rating.count }} Reviews</span>
        </div>
        <h3>${{ props.product.price }}</h3>
        <p>
          {{ props.product.description }}
        </p>

        <hr />

        <div class="d-flex gap-2 justify-content-center">
          <AddButton :data="props.product" name="Add To Cart" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-bg {
  background-color: #fafafa;

h4 {
  font-weight: 400;
  font-size: 20px;
  color: #252b42;
  line-height: 30px;
}
span {
  font-weight: 700;
  font-size: 14px;
  color: #737373;
}
h3 {
  font-weight: 700;
  line-height: 32px;
  font-size: 24px;
}
p {
  font-size: 14;
  color: #858585;
}
.image img {
  height: 300px;
  width: 300px;
}
input {
  width: 30px;
  text-align: center;
  outline: none;
}}
</style>
