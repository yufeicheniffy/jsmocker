import Vue from "vue";
import VueRouter from "vue-router";
import apiList from "../views/apiList"
const routes = [
    {
        path: '/',
        name: 'index',
        redirect:'/apiList',
        component: {
            render(h){
                return h('router-view');
            }
        }
    },
    {
        path: '/apiList',
        name: 'apiList',
        meta: {
            title: 'api列表 '
        },
        component: () => import('../views/apiList')
    },
]

const router = new Router({
    routes
});

export default router