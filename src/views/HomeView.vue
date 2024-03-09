<script setup lang="ts">
import MainSection from '@/components/Home/main-S/MainSection.vue'
import ProductSection from '@/components/Home/product-S/ProductSection.vue'
import AboutSection from '@/components/Home/about-S/AboutSection.vue'
import ServicesSection from '@/components/Home/services-S/ServicesSection.vue'
import ClientsSection from '@/components/Home/clients-S/ClientsSection.vue'

window.scrollTo(0, 0)

</script>

<template>
  <div>
    <div class="header">
      <div class="title">
        <h5 class="">SUMMER 2024</h5>
        <h1>
          NEW
          <h1>COLLECTION</h1>
        </h1>
        <div>
          <p>We know how large objects will act</p>
          <p>but things on a small scale.</p>
        </div>
        <button class="btn">SHOP NOW</button>
      </div>
    </div>
    <MainSection />
    <ProductSection />
    <AboutSection />
    <ClientsSection />
    <ServicesSection />
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/sass/main.scss';

.header {
  // border-radius: 20px;
  height: 450px;
  width: 100%;
  background-image: url(../assets/shop1.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-top: 0px;
  position: relative;

  h5 {
    font-weight: 700;
    color: #2a7cc7;
    font-size: 16px;
  }
  h1 {
    font-weight: 700;
    font-size: 58px;
    color: white;
    // text-shadow: 0 0 3px black;
  }

  button {
    width: fit-content;
    padding: 15px 40px;
    font-weight: 500;
    font-size: 20px;
    color: white;
    background-color: $main-color;
    transition: 0.5s;
    margin-bottom: 30px;
  }
  button:hover {
    background-color: #1c97df;
    color: white;
  }

  .title {
    position: absolute;
    top: 50%;
    left: -120px;
    // max-width: 448px;
    transform: translate(50%, -50%);
    display: flex;
    flex-direction: column;
    gap: 20px;
    z-index: 100;
  }
  .title p {
    color: #444;
    line-height: 30px;
    font-size: 20px;
    text-shadow: 0 0 1px gray;
  }
  @media (max-width: 912px) {
    .title {
      left: -80px;
    }
    .title h1 {
      font-size: 35px;
    }

    .title p {
      font-size: 15px;
    }
    .title button {
      padding: 10px 20px;
    }
    @media (max-width: 767px) {
      .header {
        height: 600px;
      }
      .title {
        left: 50%;
        top: 65%;
        transform: translateX(-50%);
        gap: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      p {
        display: none;
      }
      .title h1 {
        display: flex;
        gap: 10px;
        letter-spacing: 2px;
      }
    }
  }
  .header::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0%;
    background-color: rgba(0, 0, 0, 0.103);
    width: 100%;
    height: 100%;
    z-index: 1;
  }
}
</style>
