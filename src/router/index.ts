import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('@/views/ShopView.vue'),
      meta: {
        title: 'Shop'
      },

      children: [
        {
          path: 'men',
          name: 'men',
          component: () => import('@/views/shop/MenView.vue'),
          meta: {
            title: 'Men'
          }
        },
        {
          path: 'women',
          name: 'women',
          component: () => import('@/views/shop/WomenView.vue'),
          meta: {
            title: 'Women'
          }
        },
        {
          path: 'jewelery',
          name: 'jewelery',
          component: () => import('@/views/shop/JeweleryView.vue'),
          meta: {
            title: 'jewelery'
          }
        },
        {
          path: 'electronic',
          name: 'electronic',
          component: () => import('@/views/shop/ElectronicView.vue'),
          meta: {
            title: 'electronic'
          }
        }
      ]
    },
    {
      name: 'single-product',
      path: '/product/:id',
      component: () => import('@/views/shop/SingleProduct.vue'),
      meta: {
        title: 'Product'
      }
    },
    {
      name: 'cart',
      path: '/cart',
      component: () => import('@/views/CartPage.vue'),
      meta: {
        title: 'Cart'
      }
    },
    {
      name:'login',
      path: '/login',
      component: () => import("@/views/LoginView.vue"),
      meta: {
        title: "Login"
      }
    },
    {
      name:'register',
      path: '/register',
      component: () => import("@/views/RegisterView.vue"),
      meta: {
        title: "Register"
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title as string
  next()
})
export default router
