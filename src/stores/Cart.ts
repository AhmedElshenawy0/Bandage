import { defineStore } from 'pinia'
import { type CartListType, type ProductType, type FormType } from '@/Types/productsType'
import { toast } from 'vue3-toastify'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'

const router = useRouter()
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
    async setProductToCart(product: ProductType, count: number, id: number) {
      product.rating.count = count

      await axios
        .post('https://fakestoreapi.com/carts', {
          userId: id,
          date: Date.now(),
          products: product
        })
        .then((res) => {
          const index = this.cartList?.findIndex((ele) => ele.id === res.data.products.id)
          index === -1
            ? this.cartList?.push(res.data.products)
            : this.cartList[index].rating.count++
          sessionStorage.setItem('cartList', JSON.stringify(this.cartList))
          this.cartList = JSON.parse(sessionStorage.getItem('cartList') || '')
          console.log(this.cartList)
        })

      toast.success('The item has been added successfully')
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
      toast.success('You have been successfully registered, please log in')
      // }
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
    DeleteAccount() {
      sessionStorage.removeItem('cartList')
      sessionStorage.removeItem('id')
      this.id = null
      this.cartList = []
    }
  }
})
