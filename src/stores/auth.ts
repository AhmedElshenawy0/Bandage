import { defineStore } from 'pinia'
import { type CartListType, type ProductType, type FormType } from '@/Types/productsType'
import { toast } from 'vue3-toastify'
import axios from 'axios'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartList: JSON.parse(localStorage.getItem('cartList') || ''),
    isToken: localStorage.getItem('token') ? true : false
  }),
  getters: {},
  actions: {
    async login(formData: FormType) {
      await axios
        .post('https://fakestoreapi.com/auth/login', formData)
        .then((res) => localStorage.setItem('token', res.data.token))

      this.isToken = true
    },
    logout() {
      localStorage.removeItem('token')
      this.isToken = false
    }
  }
})
