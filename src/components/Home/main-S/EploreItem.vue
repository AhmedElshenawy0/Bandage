<template>
  <div>
    <h3 class="fw-normal">Top Product Of the Week</h3>
    <RouterLink to="/" class="explore">EXPLORE ITEMS</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #2d8ac0bb;
  position: absolute;
  bottom: 0;
  left: 0;
  height: fit-content;
  padding: 40px 60px;
  align-items: center;
  color: white;

  .explore {
    padding: 10px 20px;
    width: fit-content;
    border: 1px solid #ffff;
    border-radius: 5px;
    font-weight: 700;
    font-size: 14px;
    color: white;
    text-align: center;
    text-decoration: none;
    text-shadow: 0 0 2px black;
  }

  h3 {
    text-shadow: 0 0 10px black;
    font-weight: 700;
    font-size: 24px;
  }
}

@media (max-width: 767px) {
  div {
    gap: 10px;
    width: 100%;
    padding: 0;
    align-items: center;
    justify-content: center;
    color: white;
    height: 50%;

    .explore {
      padding: 10px 20px;
      width: fit-content;
      border: 1px solid #ffff;
      border-radius: 5px;
      font-weight: 700;
      font-size: 14px;
      color: white;
      text-align: center;
      text-decoration: none;
      text-shadow: 0 0 2px black;
    }
  }
}
</style>
