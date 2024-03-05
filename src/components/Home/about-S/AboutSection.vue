<template>
  <div class="container gap-3 gap-lg-5 row my-4 mx-auto">
    <div class="col-md-6 p-0">
      <img :src="img1" alt="" class="img me-1" />
      <img :src="img2" alt="" class="img" />
    </div>
    <div class="col-md-5 my-auto">
      <h5>Featured Products</h5>
      <h2 class="my-4">We love what we do</h2>
      <p>
        Problems trying to resolve the conflict between the two major realms of Classical physics:
        Newtonian mechanics.
        <br />
        <br />
        Problems trying to resolve the conflict between the two major realms of Classical physics:
        Newtonian mechanics
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import img1 from '@/assets/unsplash_Lks7vei-eAg (1).png'
import img2 from '@/assets/unsplash_.png'
</script>

<style lang="scss" scoped>
@import '@/assets/sass/main.scss';
.container {
  h5 {
    color: $main-color;
    font-weight: 700;
    font-size: 17px;
  }
  h2 {
    font-weight: 700;
    font-size: 40px;
    color: #252b42;
  }
  p {
    font-weight: 400;
    font-size: 20px;
    color: -color#737373;
  }
  .img,
  .img {
    width: 48%;
    height: 100%;
  }
}
</style>
