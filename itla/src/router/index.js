// for mapping
// config all the settings in Routing
import Vue from 'vue'
import VueRouter from 'vue-router'

// Import Pages
import Home from '../views/Home.vue'

Vue.use(VueRouter); // Router 전역 등록

const routes = [ // path connection
    {  // 이동하는 방법은 path로 이동, name으로 이동하는 방법 2가지가 있음.
        path: '/',
        name: 'home',
        component: Home
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue')
    },
    {
        path: '/signup',
        name: 'signup',
        component: () => import('../views/Signup.vue')
    },

    // otherwise redirect to home
    {
        path: '*',
        redirect: "/"
    }
];

const router = new VueRouter({
    mode: 'history', // link 이동을 쉽게 하기 위함, 아니면 /About 등으로 이동하지 않고 링크가 이상하게 길어짐
    base: process.env.BASE_URL,
    routes
});

export default router