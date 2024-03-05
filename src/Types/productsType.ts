export type ProductType = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

export type StateType = {
  allProducts: ProductType[]
  limitedProducts: ProductType[]
  product: ProductType
  menProducts: ProductType[]
  womenProducts: ProductType[]
  jeweleryProducts: ProductType[]
  electronicProducts: ProductType[]
}
export type CartListType = {
  cartList: ProductType[]
  isToken: any
  token: string
  id: any
  user:any
}

export type FormType = {
  username: string
  password: string
}
