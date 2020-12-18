import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes= [
        { 
            path: '/', 
            name: 'home',
            component: () => import('../components/home')
        },
        
        { 
            path: '/swipe', 
            name: 'swipe',
            component: () => import('../components/swipe'),
        },
        
        { 
            path: '/home2', 
            name: 'home2',
            component: () => import('../components/home2')
        },
        { 
            path: '/result', 
            name: 'result',
            component: () => import('../components/result'),
        },
        
        { 
            path: '/shop_detail', 
            name: 'shop_detail',
            component: () => import('../components/shop_detail')
        },
        { 
            path: '/promotion', 
            name: 'promotion',
            component: () => import('../components/promotion'),
        }
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router