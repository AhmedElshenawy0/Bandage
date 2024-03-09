<template>
  <div class="d-flex login" style="margin-top: 0px; padding: 40px 0">
    <div class="d-flex container w-100 bg-white p-0 gap-md-5 gap-lg-0">
      <div class="image">
        <img src="@/assets/men-model.jpg" class="h-100 w-100" alt="" />
      </div>
      <div class="d-flex justify-content-center align-items-center form">
        <form class="container p-3 d-flex flex-column gap-4" @submit.prevent="handleSubmit">
          <h3 class="text-center">Register</h3>
          <div class="d-flex flex-column">
            <label>User name</label>
            <input type="text" v-model="formData.username" required />
          </div>
          <div class="d-flex flex-column">
            <label>Password</label>
            <input type="password" v-model="formData.password" required />
          </div>
          <button type="submit" class="btn">Register</button>
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
const { id } = storeToRefs(cartStore)
const formData = {
  username: '',
  password: ''
}
const register = cartStore.register
const handleSubmit = () => {
  if (!id.value) {
    register(formData)
    setTimeout(() => {
      router.push('/login')
    }, 3000)
  } else {
    toast.warning('You have already registered, please log in')
    setTimeout(() => {
      router.push('/login')
    }, 3000)  }
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
