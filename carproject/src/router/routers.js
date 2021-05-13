import Vue from 'vue'
import VueRouter from 'vue-router'
import main from "../components/main";
import login from "../components/login"
import tableCars from "../components/tableCars";
import carEdit from "../components/carEdit";
import exange from "../components/exange";
import Favorits from "../components/Favorits";

Vue.use(VueRouter)


export default new VueRouter({
    mode: 'history',
    routes: [

        {
            path: '/main',
            component: main
        },
        {
            path:'/login',
            component: login
        },
        {
            path: '/tableCars',
            component:tableCars
        },
        {
            path: '/carEdit',
            component: carEdit
        },
        {
            path: '/exange',
            component:exange
        },
        {
            path: '/Favorits',
            component: Favorits

        }

    ]
})


