<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useCartStore } from '@/stores/Cart'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const cartStore = useCartStore()

const { cartList, isToken, id, token } = storeToRefs(cartStore)
const logout = cartStore.logout
const open = ref<boolean>(false)

const userlogout = () => {
  logout()
  
}
const userlogoutRes = () => {
  logout()

  open.value = !open.value
}
</script>

<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light fixed-top">
    <div class="mx-md-3 container-fluid d-flex justify-content-between w-100">
      <RouterLink to="/" class="navbar-brand text-dark fs-5 fw-bold" href="#">Bandage</RouterLink>
      <div style="width: 58%" class="justify-content-between align-items-center d-none d-md-flex">
        <ul class="navbar-nav gap-4 w-100 text-center">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link active" aria-current="page" href="#"
              >Home</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/shop" class="nav-link" href="#">Shop</RouterLink>
          </li>
        </ul>
        <div class="d-flex gap-2 align-items-center">
          <div class="d-flex align-items-center gap-1 me-2">
            <RouterLink v-if="!token" to="/login" class="login">Login</RouterLink>
            <span v-if="!token">/</span>
            <RouterLink v-if="!token" to="/register" class="login">Register</RouterLink>
            <button v-if="token" class="login" @click="userlogout()">Logout</button>
          </div>
          <div class="position-relative">
            <RouterLink
              :to="{ name: 'cart' }"
              class="bg-transparent border-0 text-primary nav-link"
            >
              <i class="bi bi-cart cart"></i>
            </RouterLink>
            <small class="position-absolute" v-if="token">{{ cartList.length }}</small>
            <small class="position-absolute" v-if="!token">0</small>
          </div>
        </div>
      </div>
      <div
        :style="{
          clipPath: `${open ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' : 'polygon(0 0, 100% 0, 100% 0, 0 0)'}`
        }"
        class="justify-content-between align-items-center d-flex position-absolute responsive"
      >
        <ul class="navbar-nav gap-4 w-100 text-center">
          <li class="nav-item">
            <RouterLink
              @click="open = !open"
              to="/"
              class="nav-link active"
              aria-current="page"
              href="#"
              >Home</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink @click="open = !open" to="/shop" class="nav-link" href="#">Shop</RouterLink>
          </li>
        </ul>
        <div class="d-flex gap-3 flex-column justify-content-center align-items-center">
          <RouterLink v-if="!token" to="/login" class="login" @click="open = !open"
            >Login</RouterLink
          >
          <RouterLink v-if="!token" to="/register" class="login" @click="open = !open"
            >Register</RouterLink
          >
          <button v-if="token" class="login" @click="userlogoutRes()">Logout</button>
          <div class="position-relative">
            <RouterLink
              :to="{ name: 'cart' }"
              class="bg-transparent border-0 text-primary"
              @click="open = !open"
            >
              <i class="bi bi-cart cart"></i>
            </RouterLink>
            <small class="position-absolute" v-if="token">{{ cartList.length }}</small>
            <small class="position-absolute" v-if="!token">0</small>
          </div>
        </div>
      </div>
      <button @click="open = !open" class="border-0 p-0 bg-transparent bar">
        <i class="bi bi-list fs-3"></i>
      </button>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import '@/assets/sass/main.scss';

nav {
  .cart {
    color: $main-color;
  }
  small {
    background-color: $main-color;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 12px;
    font-weight: 500;
    top: -5px;
    right: -12px;
    cursor: pointer;
  }
  .bar {
    display: none;
  }
  .responsive {
    transition: 0.6s;
    .nav-link:active,
    .nav-link:focus,
    .nav-link:hover {
      color: $main-color;
      outline: 1px solid $main-color;
    }
  }
  .nav-item {
    font-weight: 500;
  }
  .nav-link,
  .nav-link,
  .nav-link {
    transition: 0.5s;
    outline-color: $main-color;
  }
  .nav-link:active,
  .nav-link:focus,
  .nav-link:hover {
    color: $main-color;
  }
  span {
    color: $main-color;
  }
  @media (max-width: 767px) {
  }
  @media (max-width: 767px) {
    .responsive {
      position: absolute;
      left: 0;
      top: 50px;
      flex-direction: column;
      background-color: white;
      padding: 10px;
      width: 100%;
      gap: 20px;
      justify-content: center;
      align-items: center;
      width: -100%;

      ul {
        width: 100%;
      }

      .main-nav .nav-link:hover,
      .main-nav .nav-link:focus,
      .main-nav .nav-link:active {
        border-bottom: 1px solid #33d1cc;
      }
    }
    .bar {
      display: block;
      color: $main-color;
    }
  }
  .login {
    text-decoration: none;
    border: none;
    background-color: transparent;
    font-size: 14px;
    font-weight: 500;
    color: $main-color;
  }
}
</style>
