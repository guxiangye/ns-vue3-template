import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
const history = createWebHistory()

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: "/index",
    },
    {
        path: "/index",
        name: "index",
        component: () => import("../views/index/index.vue")
    },
    {
        path: "/home",
        name: "home",
        component: () => import("../views/home/home.vue")
    },
    {
        path: "/mine",
        name: "mine",
        component: () => import("../views/mine/mine.vue")
    }
]

const router = createRouter({
    history,
    routes
})

/**
 * 导出默认的路由
 */
export default router