<script setup lang="ts">
import { useProductStore } from '@/stores/product'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
const productStore = useProductStore()
const { menProducts, womenProducts, electronicProducts, jeweleryProducts } =
  storeToRefs(productStore)
const menProduct = productStore.getMenProducts
const womenProduct = productStore.getWomenProducts
const jeweleryProduct = productStore.getjeweleryProducts
const elecProduct = productStore.getElectronicsProducts
onMounted(() => {
  menProduct()
  womenProduct()
  elecProduct()
  jeweleryProduct()
})
console.log(menProducts.value.length)
window.scrollTo(0, 0)

</script>

<template>
  <div class="category">
    <div
      class="container d-flex flex-column flex-md-row align-items-center gap-2 justify-content-between flex-md-wrap"
    >
      <RouterLink :to="{ name: 'men' }" class="men">
        <h5>Men's clothing</h5>
        <p>{{ menProducts.length }} Items</p>
      </RouterLink>
      <RouterLink :to="{ name: 'women' }" class="women">
        <h5>Women's clothing</h5>
        <p>{{ womenProducts.length }} Items</p>
      </RouterLink>
      <RouterLink :to="{ name: 'jewelery' }" class="jewelery">
        <h5>jewelery</h5>
        <p>{{ jeweleryProducts.length }} Items</p>
      </RouterLink>
      <RouterLink :to="{ name: 'electronic' }" class="electronics">
        <h5>electronics</h5>
        <p>{{ electronicProducts.length }} Items</p>
      </RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.category {
  background-color: #fafafa;
  margin-bottom: 10px;

  h5 {
    color: rgb(255, 255, 255);
    font-weight: 700;
    font-size: 16px;
    z-index: 22;
  }
  p {
    color: white;
    font-weight: 400;
    font-size: 14px;
    z-index: 2;
  }

  .container {
    padding: 15px 0;

    .men {
      background-image: url('@/assets/man-smiling-with-hands-hips.jpg');
    }
    .women {
      background-image: url('@/assets/averie-woodard-4nulm-JUYFo-unsplash (1).jpg');
    }
    .jewelery {
      background-image: url('@/assets/model-jewelery.jpg');
    }
    .electronics {
      background-image: url('@/assets/electronics.jpeg');
    }

    .men,
    .women,
    .electronics,
    .jewelery {
      background-position: center;
      background-size: cover;
      flex: 1;
      height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      border-radius: 5px;
      text-decoration: none;
      z-index: 5;
    }
    .men::after,
    .women::after,
    .jewelery::after,
    .electronics::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background-color: #00000073;
      border-radius: 5px;
      transition: all 1s;
    }
    .men:hover ::after,
    .women:hover ::after,
    .jewelery:hover ::after,
    .electronics:hover ::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background-color: #00000057;
      border-radius: 5px;
      z-index: -1;
      transition: all 1s;
    }

    @media (max-width: 767px) {
      .men,
      .women,
      .jewelery,
      .electronics {
        width: 100%;
      }
    }
    h5 {
    color: rgb(255, 255, 255);
    font-weight: 700;
    font-size: 16px;
    z-index: 22;
  }
  }
}
</style>
