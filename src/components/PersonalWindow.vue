<template>
    <div class="PW-container">
        <div class="user-info">
            <template v-if="!isShow">
                <img src="https://images.pexels.com/photos/27582996/pexels-photo-27582996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="头像">
                <span class="nickname">游客</span>
                <span class="roles">未登录</span>
            </template>
            <template v-else>
                <img :src="identity.avatar" alt="头像">
                <span class="nickname">{{identity.nickname}}</span>
                <span class="roles">{{identity.roles}}</span>
            </template>
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
import {computed, onMounted, ref} from 'vue';
import {useAuthStore} from "../stores/authStore";

const useAuth=useAuthStore()
const router=useRouter()
const identity=ref({
  avatar:"https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  nickname:"ScopeLens",
  roles:"管理员"
})
const isShow=computed(()=>{
  return useAuth.isLoggedIn
})
const logOut=()=>{
  useAuth.logout()
}

function infoInit(){

}

onMounted(()=>{
  infoInit()
})
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