// 使用 Pinia 管理登录状态
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        isLoggedIn: !!localStorage.getItem('token'),
        // isLoggedIn: true,
    }),
    actions: {
        login(token) {
            localStorage.setItem('token', token);
            this.isLoggedIn = true;
        },
        logout() {
            localStorage.removeItem('token');
            this.isLoggedIn = false;
        }
    }
});

// 在组件中使用
// import { useAuthStore } from '@/stores/auth';
//
// const authStore = useAuthStore();
// if (!authStore.isLoggedIn) {
//     router.push('/login');
// }
