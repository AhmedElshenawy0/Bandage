<script setup lang="ts">
import { RouterView } from 'vue-router'
import ShopCategory from '@/components/Shop/ShopCategory.vue'
</script>

<template>
  <div class="">
    <ShopCategory />
    <hr />
    <div class="container">
      <RouterView />
    </div>
  </div>
</template>

<styl scoped lang="scss"></styl>
