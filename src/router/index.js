// 引入创建函数
import { createRouter, createWebHashHistory } from "vue-router";
import {useAuthStore} from "../stores/authStore.js";
// 创建路由
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            redirect: "/home"
        },
        {
            path: '/home',
            component: () => import("../pages/Home.vue")
        },
        {
            path: '/personalhome',
            component: () => import("../pages/PersonalHome.vue"),
            meta: { requiresAuth: true },
        },
        {
            path: '/mymessage',
            component: () => import("../pages/UserMessage.vue"),
            meta: { requiresAuth: true },
        },
        {
            path: '/mystar',
            component: () => import("../pages/UserStar.vue"),
            meta: { requiresAuth: true },
        },
        {
            path: '/mywebhistory',
            component: () => import("../pages/Userbhistory.vue"),
            meta: { requiresAuth: true },
        },
        {
            path: '/userlist',
            component: () => import("../pages/UserList.vue")
        },
        {
            path: '/postlist',
            component: () => import("../pages/PostShowList.vue")
        },
        {
            path: '/post',
            component: () => import("../pages/Post.vue"),
        },
        {
            path: '/editpost',
            component: () => import("../pages/EditPost.vue"),
            meta: { requiresAuth: true },
        },
        {
            name: 'login',
            path: '/login',
            component: () => import("../pages/Login.vue")
        },
        {
            path: '/register',
            component: () => import("../pages/Register.vue")
        }
    ]
})

router.beforeEach((to, from, next) => {
    const useAuth = useAuthStore()  // 获取 Pinia store 实例

    // 如果路由需要登录
    if (to.meta.requiresAuth && !useAuth.isLoggedIn) {
        next({ name: 'login' })  // 重定向到首页
    } else {
        next()  // 允许通过
    }
})

export default router;