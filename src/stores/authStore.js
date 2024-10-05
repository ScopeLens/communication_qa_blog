// 使用 Pinia 管理登录状态
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        isLoggedIn: !!localStorage.getItem('token'),
        // isLoggedIn: true,
        ImgUrl:"http://localhost:105",
        Username:'',
        Nickname:'',
        AvatarURL:'',
        FollowersCount:'',
        FollowingCount:'',
        CreatedAt:''
    }),
    actions: {
        login(data) {
            localStorage.setItem('token', data['Token']);
            this.isLoggedIn = true;
        },
        logout() {
            localStorage.removeItem('token');
            this.isLoggedIn = false;
        }
    }
});
