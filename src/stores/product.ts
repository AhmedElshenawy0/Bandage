import type { StateType } from '@/Types/productsType'
import axios from 'axios'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('counter', {
  state: (): StateType => ({
    allProducts: [],
    limitedProducts: [],
    menProducts: [],
    womenProducts: [],
    jeweleryProducts: [],
    electronicProducts: [],
    product: {
      id: +'',
      title: '',
      price: +'',
      description: '',
      category: '',
      image: '',
      rating: {
        rate: +'',
        count: +''
      }
    }
  }),
getters:{
  menCount: (state)=>{
    return state.menProducts.length
  }
},
  actions: {
    async getLimitProducts() {
      await axios
        .get('https://fakestoreapi.com/products?limit=10')
        .then((res) => (this.limitedProducts = res.data))
    },
    async getSingleProducts(id: number) {
      await axios
        .get(`https://fakestoreapi.com/products/${+id}`)
        .then((res) => (this.product = res.data))

      console.log('sinfle')
    },
    async getMenProducts() {
      await axios
        .get(`https://fakestoreapi.com/products/category/men's clothing`)
        .then((res) => (this.menProducts = res.data))
    },
    async getWomenProducts() {
      await axios
        .get(`https://fakestoreapi.com/products/category/women's clothing`)
        .then((res) => (this.womenProducts = res.data))
    },
    async getjeweleryProducts() {
      await axios
        .get(`https://fakestoreapi.com/products/category/jewelery`)
        .then((res) => (this.jeweleryProducts = res.data))
    },
    async getElectronicsProducts() {
      await axios
        .get(`https://fakestoreapi.com/products/category/electronics`)
        .then((res) => (this.electronicProducts = res.data))
    },
    async getproductsByCategory() {
      await axios
        .get(`https://fakestoreapi.com/products/category/men's clothing`)
        .then((res) => (this.menProducts = res.data))
    }
  }
})
