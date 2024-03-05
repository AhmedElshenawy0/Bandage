<script setup lang="ts">
import { useCartStore } from '@/stores/Cart'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
const cartStore = useCartStore()

const { cartList, token, id, isToken } = storeToRefs(cartStore)
let userId = ref(id.value)
const increase = cartStore.increase
const decrease = cartStore.decrease
const deleteFromCart = cartStore.deleteFromCart
const router = useRouter()

const handleDeleteAccount = () => {
  sessionStorage.removeItem('cartList')
  sessionStorage.removeItem('id')
  userId.value = null
  cartList.value = []
  console.log(userId.value)
}
</script>

<template>
  <div>
    <div v-if="!userId">
      <h5 class="mt-3">
        You must register and log in first .
        <span class="login" v-if="!userId && !token" @click="$router.push('/register')">Register</span>
      </h5>
    </div>
    <div v-if="!token && userId">
      <h5 class="mt-3">
        You must log in first to show your cart.
        <span class="login" v-if="userId && !token" @click="$router.push('/login')">Login</span>
        <button
          @click="handleDeleteAccount"
          class="py-1 px-3 fs-6 fw-semibold text-white bg-danger rounded mt-3 border-0"
        >
          Delete Account
        </button>
      </h5>
    </div>
    <div class="d-flex flex-column" v-if="token">
      <div
        :v-if="cartList[0]"
        v-for="product in cartList"
        :key="product.id"
        class="d-flex flex-column gap-4 gap-md-5 position-relative border-bottom py-3 flex-md-row"
      >
        <div class="d-flex gap-4 flex-column flex-md-row align-items-center">
          <div class=""><img width="70" height="70" :src="product.image" alt="" /></div>
          <div class="text-md-start text-center">
            <h3 style="max-height: 63px; overflow: hidden; margin-bottom: 7px; font-size: 25px">
              {{ product.title }}
            </h3>
            <p style="height: 20px; overflow: hidden; color: #737373; font-weight: 600">
              {{ product.description }}
            </p>
            <button @click="deleteFromCart(product.id)" class="btn trash py-2">
              <svg xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 0 448 512">
                <path
                  fill="#ffffff"
                  d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="d-flex flex-column align-items-center gap-2 gap-md-3">
          <div class="d-flex gap-1">
            <button @click="decrease(product)" class="btn btn-calc fw-bold p-1">
              <svg xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 0 448 512">
                <path
                  fill="#ffffff"
                  d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
                />
              </svg>
            </button>
            <span class="btn btn-calc">{{ product.rating.count }}</span>
            <button @click="increase(product)" class="btn btn-calc p-1">
              <svg xmlns="http://www.w3.org/2000/svg" height="17" width="17" viewBox="0 0 448 512">
                <path
                  fill="#ffffff"
                  d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                />
              </svg>
            </button>
          </div>
          <p class="text-center fw-semibold text-secondary">
            ${{ (product.price * product.rating.count).toFixed(2) }}
          </p>
        </div>
      </div>
      <div v-if="!cartList[0]">
        <button
          @click="$router.push({ name: 'shop' })"
          class="continue-btn position-relative border-0 bg-transparent d-flex align align-items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 512 512">
            <path
              fill="#737373"
              d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"
            />
          </svg>
          <h5 class="">Continue shopping</h5>
        </button>
        <h5 class="mt-3">Your shopping cart does not contain any items.</h5>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/main.scss';
.continue-btn svg {
  position: absolute;
  left: 10px;
  top: 53%;
  transform: translateY(-50%);
}
.continue-btn:hover svg {
  animation: continue 1.2s infinite;
}
@keyframes continue {
  0% {
    left: 10px;
  }
  50% {
    left: 5px;
  }
  100% {
    left: 10px;
  }
}
.continue-btn h5 {
  color: #737373;
  margin: 0 30px;
}

.btn {
  background-color: rgb(59 113 202);
  transition: 0.5s;
  font-size: 12px;
  font-weight: 600;
  color: white;
}

.btn:hover {
  background-color: rgb(14, 78, 180);
  animation-name: btn;
  animation-duration: 1s;
}
.trash {
  background-color: rgb(235, 52, 83);
  box-shadow: 0 2px 3px rgb(226, 130, 130);
}
.trash:hover {
  background-color: rgb(235, 52, 83);
  box-shadow: 0 2px 3px rgb(226, 130, 130);
}
.login {
  font-size: 15px;
  color: $main-color;
  cursor: pointer;
}

@media (max-width: 767px) {
  .trash {
    position: absolute;
    top: 10px;
    right: 0;
  }
}
.btn-calc {
  box-shadow: 0 2px 3px rgb(132, 132, 243);
}
</style>
