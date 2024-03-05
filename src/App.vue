<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/global/NavBar.vue'
import MyFooter from './components/global/MyFooter.vue'
</script>

<template>
  <NavBar />
  <RouterView />
  <MyFooter />
</template>

<style lang="scss">
body {
  box-sizing: border-box;
  padding-bottom: -100px;
  margin-bottom: -10px;
  margin-top: 55px;
}
</style>
