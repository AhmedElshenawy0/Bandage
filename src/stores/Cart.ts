import { defineStore } from 'pinia'
import { type CartListType, type ProductType, type FormType } from '@/Types/productsType'
import { toast } from 'vue3-toastify'
import axios from 'axios'
import Swal from 'sweetalert2'

export const useCartStore = defineStore('cart', {
  state: (): CartListType => ({
    cartList: sessionStorage.getItem('cartList')
      ? JSON.parse(sessionStorage.getItem('cartList') || '')
      : [],
    isToken: sessionStorage.getItem('token') ? true : false,
    id: sessionStorage.getItem('id') ? sessionStorage.getItem('id') : '',
    token: sessionStorage.getItem('token') ? sessionStorage.getItem('token') : '',
    user: ''
  }),
  getters: {},
  actions: {
    setProductToCart(product: ProductType, count: number) {
      if (sessionStorage.getItem('token')) {
        product.rating.count = count
        const index = this.cartList?.findIndex((ele) => ele.id === product.id)
        index === -1 ? this.cartList?.push(product) : this.cartList[index].rating.count++
        sessionStorage.setItem('cartList', JSON.stringify(this.cartList))
        this.cartList = JSON.parse(sessionStorage.getItem('cartList') || '')
        toast.success('The item has been added successfully')
      } else {
        toast.warning('You have to login first')
      }
    },
    increase(product: ProductType) {
      if (sessionStorage.getItem('token')) {
        const index = this.cartList.findIndex((ele) => ele.id === product.id)
        index !== -1 && this.cartList[index].rating.count++
        sessionStorage.setItem('cartList', JSON.stringify(this.cartList))
      } else {
        toast.warning('You have to login first')
      }
    },
    decrease(product: ProductType) {
      if (sessionStorage.getItem('token')) {
        const index = this.cartList.findIndex((ele) => ele.id === product.id)
        index !== -1 &&
          this.cartList[index].rating.count !== 0 &&
          this.cartList[index].rating.count--
        sessionStorage.setItem('cartList', JSON.stringify(this.cartList))
      } else {
        toast.warning('You have to login first')
      }
    },
    deleteFromCart(id: number) {
      if (sessionStorage.getItem('token')) {
        this.cartList = this.cartList.filter((ele) => ele.id != id)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your item has been deleted',
          showConfirmButton: false,
          timer: 1000
        })
        sessionStorage.setItem('cartList', JSON.stringify(this.cartList))
      } else {
        toast.warning('You have to login first')
      }
    },

    async register(formData: FormType) {
      await axios
        .post('https://fakestoreapi.com/users', formData)
        .then((res) => (this.id = res.data.id))
      sessionStorage.setItem('id', JSON.stringify(this.id))
      this.id = JSON.parse(sessionStorage.getItem('id') || '')
    },
    async login(formData: FormType) {
      if (sessionStorage.getItem('id')) {
        await axios
          .post('https://fakestoreapi.com/auth/login', formData)
          .then((res) => (this.token = res.data.token))

        sessionStorage.setItem('token', JSON.stringify(this.token))
        this.id = JSON.parse(sessionStorage.getItem('token') || '')

        this.isToken = true
      }
    },

    logout() {
      sessionStorage.removeItem('token')
      this.token = ''
    },
    DeleteAccount() {}
  }
})
