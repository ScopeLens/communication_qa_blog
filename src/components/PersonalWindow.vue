<template>
    <div class="PW-container" v-loading="isLoading">
        <div class="user-info">
                <img :src="useAuth.AvatarURL" alt="头像">
                <span class="nickname">{{useAuth.Nickname}}</span>
<!--                <span class="roles">{{identity.roles}}</span>-->
        </div>
        <ul>
            <li><router-link replace to="/personalhome">我的主页</router-link></li>
            <li><router-link replace to="/mymessage">我的消息</router-link></li>
            <li><router-link replace to="/mystar">我的收藏</router-link></li>
            <li><router-link replace to="/mywebhistory">浏览历史</router-link></li>
            <li @click="logOut"><a>退出登录</a></li>
        </ul>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { watch,ref,onMounted} from 'vue';
import {useAuthStore} from "../stores/authStore";
import {SearchUsersByUsername} from "../http/api/search.js";

const isLoading=ref(false);
const useAuth=useAuthStore()
const router=useRouter()
watch(()=>useAuth.isLoggedIn,async (newValue) => {
  if (newValue) {
    await InfoInit()
  }else{
    useAuth.AvatarURL="https://images.pexels.com/photos/27582996/pexels-photo-27582996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    useAuth.Nickname="游客"
  }
}, { immediate: true })
const logOut=()=>{
  useAuth.logout()
}
async function InfoInit() {
  isLoading.value = true
  const res = (await SearchUsersByUsername()).data
  useAuth.AvatarURL=useAuth.ImgUrl + res['avatar_url']
  useAuth.Nickname=res['nickname']
  useAuth.Username=res['username']
  useAuth.FollowersCount=res['followers_count']
  useAuth.FollowingCount=res['following_count']
  useAuth.CreatedAt=res['created_at']
  isLoading.value = false
}

</script>
<style scoped lang="scss">
.PW-container{
    border: 3px solid black;
    border-radius: 10px;
    background-image: url("../assets/imgs/avatar-bg.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
}
.user-info{
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

  img{
    width: 100px;
    height: 100px;
    object-position: top;
    object-fit: cover;
    border-radius: 50%;
  }

  .nickname{
    font-size: 30px;
  }

  .roles{
    color: goldenrod;
    font-weight: bold;
  }
}

ul{
    list-style: none;

  li{
    background-color: #dbe2ef82;
    border-radius: 5px;
    margin: 10px;
    padding: 5px;
    transition: 0.3s all;
    cursor: pointer;

    &:hover{
      background-color: #dbe2ef;
    }

    a{
      width: 100%;
      display: block;
      font-size: 25px;
      color: #112d4e;
      text-decoration: none;
    }
  }
}
</style>