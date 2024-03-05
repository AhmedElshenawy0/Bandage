<template>
  <div class="product">
    <ProductDetails :product="product" />
    <ProductInformation :product="product" />
    <BestSeller />
    <div class="border" style="margin-top: -40px; padding-bottom: 30px">
      <ClientsSection />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUpdated, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useProductStore } from '@/stores/product'
import { storeToRefs } from 'pinia'
import ProductDetails from '@/components/Shop/singleProduct/ProductDetails.vue'
import ProductInformation from '@/components/Shop/singleProduct/ProductInformation.vue'
import BestSeller from '@/components/Shop/singleProduct/BestSeller.vue'
import ClientsSection from '@/components/Home/clients-S/ClientsSection.vue'

const route = useRoute()
const productStore = useProductStore()
const { product } = storeToRefs(productStore)
const singleProduct = productStore.getSingleProducts
window.scrollTo(0, 0)

watch(
  () => route.params.id,
  () => {
    singleProduct(+route.params.id)
  }
)

// Fetch single product
onMounted(() => {
  singleProduct(+route.params.id)
})
</script>

<style scoped>
.product{
  scroll-behavior: smooth;
}
.main-bg {
  background-color: #fafafa;
}
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
}
</style>
