<template>
  <section class="d-flex container">
    <div class="left position-relative">
      <ExploreItem />
    </div>
    <div class="right">
      <div class="t-artical">
        <ExploreItem />
      </div>
      <div class="position-relative b-artical">
        <ExploreItem />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ExploreItem from '@/components/Home/main-S/EploreItem.vue'
</script>

<style lang="scss" scoped>
section {
  margin-top: 80px;
  gap: 15px;
  justify-content: center;
  align-items: center;

  .left {
    width: 50%;
    height: 590px;
    background-image: url('@/assets/unsplash_Bd7gNnWJBkU.jpg');
    background-position: center;
    background-size: cover;
  }
  .right {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .t-artical {
    background-image: url('@/assets/toa-heftiba-O3ymvT7Wf9U-unsplash.jpg');
    background-position: center;
    background-size: cover;
    position: relative;
    height: 290px;
  }
  .b-artical {
    background-image: url('@/assets/alex-hddife-6wWiZlA2n0Q-unsplash (1).jpg');
    background-position: center;
    background-size: cover;
    height: 290px;
  }
}

@media (max-width: 767px) {
  section {
    margin-top: 80px;
    gap: 15px;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .left {
      width: 100%;
      background-position: center;
      background-size: cover;
    }
    .right {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .t-artical {
      background-size: cover;
      background-repeat: no-repeat;
      position: relative;
      width: 100%;
      height: 450px;
    }
    .b-artical {
      background-position: center;
      background-size: cover;
      height: 450px;
      width: 100%;
    }
  }
}
</style>
