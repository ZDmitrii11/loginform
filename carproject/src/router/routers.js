import Vue from 'vue'
import VueRouter from 'vue-router'
import cars from "../components/cars";
import login from "../components/login"

Vue.use(VueRouter)


export default new VueRouter({
    mode: 'history',
    routes: [

        {
            path: '/cars',
            component: cars
        },
        {
            path:'/login',
            component: login
        },
    ]
})


