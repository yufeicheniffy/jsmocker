import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)
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

const router = new VueRouter({
    routes
});

export default router