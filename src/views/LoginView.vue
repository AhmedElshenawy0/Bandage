<template>
  <div class="d-flex login" style="margin-top: 0px; padding: 40px 0">
    <div class="d-flex container w-100 bg-white p-0 gap-md-5 gap-lg-0">
      <div class="image">
        <img src="@/assets/men-model.jpg" class="h-100 w-100" alt="" />
      </div>
      <div class="d-flex justify-content-center align-items-center form">
        <form class="container p-3 d-flex flex-column gap-4" @submit.prevent="handleSubmit">
          <h3 class="text-center">Log in</h3>
          <div class="d-flex flex-column">
            <label>User name</label>
            <input type="text" required />
          </div>
          <div class="d-flex flex-column">
            <label>Password</label>
            <input type="password" required />
          </div>
          <button type="submit" class="btn">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/Cart'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { toast } from 'vue3-toastify'

window.scrollTo(0, 0)

const router = useRouter()
const cartStore = useCartStore()
const { token } = storeToRefs(cartStore)

const formData = {
  username: 'mor_2314',
  password: '83r5^_'
}
const login = cartStore.login

const handleSubmit = () => {
  if (sessionStorage.getItem('id')) {
    login(formData)
    console.log(token.value)
    router.push('/')
  } else {
    toast.warning('You must register first')
    setTimeout(() => {
      router.push('/register')
    }, 3000)
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/sass/main.scss';
.login {
  background-color: grey;

  .image,
  .form {
    width: 50%;
  }
  label {
    font-size: 12px;
    font-weight: 500;
    color: #737373;
  }
  input {
    border: none;
    border-bottom: 1px solid gray;
    padding-bottom: 5px;
    outline: none;
    font-weight: 500;
  }
  button {
    background-color: #23a6f0;
    width: fit-content;
    margin: 0 auto;
    border-radius: 20px;
    padding: 7px 70px;
    color: white;
    font-weight: 500;
  }

  @media (max-width: 767px) {
    .container {
      flex-direction: column-reverse;
    }
    .image,
    .form {
      width: 100%;
    }
  }
}
</style>
