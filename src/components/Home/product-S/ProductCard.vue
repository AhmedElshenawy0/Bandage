<script setup lang="ts">
import { defineProps } from 'vue'
import { type ProductType } from '@/Types/productsType'
import { RouterLink } from 'vue-router'
import AddButton from '@/components/global/buttons/AddButton.vue'
const props = defineProps<{ data: ProductType }>()
const scrollToTop = () => {
  window.scrollTo(0, 0)
}
</script>

<template>
  <div class="cols col-md-3 text-center p-2">
    <div class="image">
      <img :src="data.image" alt="" class="h-100" />
    </div>
    <h5>{{ data.title }}</h5>
    <p>{{ data.description }}</p>
    <small>{{ data.price }} $</small>
    <div class="d-flex gap-2">
      <RouterLink :to="`/product/${data.id}`" class="btn flex-grow-1 text-decoration-none">
        <button @click="scrollToTop" class="bg-transparent border-0 fw-semibold">View</button>
      </RouterLink>
      <AddButton :data="data" name="Add" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/sass/main.scss';
.cols {
  h5 {
    width: 100%;
    height: 20px;
    margin: 15px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 700;
    font-size: 16px;
  }
  .image {
    height: 200px;

    img {
      width: 100%;
    }
  }

  p {
    font-weight: 700;
    font-size: 14px;
    color: $p-color;
    height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  small {
    color: #23856d;
    font-weight: 700;
  }
  .cols {
    height: fit-content;
  }
  .btn {
    border: 1px solid $main-color;
    transition: all 0.3s linear;
    font-size: 14px;
    width: 50%;
  }
  .btn:hover {
    color: white;
    background-color: $main-color;
  }
  .btn:hover button {
    color: white;
    background-color: $main-color;
  }
  @media (max-width: 767px) {
    .image {
      height: 250px;
    }

    .image img {
      width: 55%;
    }

    .btn {
      width: 100%;
    }
  }
}
</style>
