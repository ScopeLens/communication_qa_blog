<template>
    <div class="App-container">
        <div class="page-header">
            <div class="nav">
                <span>logo</span>
                <router-link to="/home" replace>主页</router-link>
                <router-link to="/ranklist" replace>排行</router-link>
                <Search target="搜索帖子" :sendTarget="toRankList"></Search>
                <Search target="搜索用户" :sendTarget="toUserList"></Search>
                <router-link v-if="isShow" to="/editpost">发布博文</router-link>
                <router-link v-else to="/login" replace>登录</router-link>
            </div>
            <div class="banner"></div>
        </div>
        <div class="page-body">
          <div class="left-part">
            <PersonalWindow></PersonalWindow>
          </div>
          <div class="middle-part">
            <router-view></router-view>
          </div>
          <div class="right-part"></div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import Search from './components/Search.vue';
import PersonalWindow from './components/PersonalWindow.vue';
import { computed } from 'vue';
import {useAuthStore} from "./stores/authStore";

const useAuth=useAuthStore();
const router=useRouter();

    let isShow=computed(()=>{
        return useAuth.isLoggedIn
    })

    function toRankList(value: string){
        router.replace({
            path:'/ranklist',
            query:{
                keyword:value
            }
        });
    }
    function toUserList(value: string){
        router.replace({
            path:'/userlist',
            query:{
                keyword:value
            }
        });
    }

</script>
<style scoped lang="scss">
.App-container{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-image: url("./assets/imgs/bg-cover.jpeg");
    background-size: cover;
    background-repeat: no-repeat;

  .page-header{
    height: 80px;
    background-image: url("./assets/imgs/top-cover.jpeg");
    background-size: cover;
    background-repeat: no-repeat;

    .nav{
      width: 70%;
      margin: 0 auto;
      display: flex;
      line-height: 80px;
      justify-content: space-evenly;

      a{
        text-decoration: none;
        color: #eeeeee;
        font-size: 20px;
        font-weight: bold;
        text-shadow: 0 0 10px black;
        transition: 0.1s all;

        &:hover{
          transform: scale(1.2);
        }
      }
    }
  }

  .page-body{
    width: 100%;
    height:0;
    flex:1;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    padding:25px 0;
    margin: 0 auto;
    position: relative;

    .left-part{
      padding-left: 20px;
    }

    .middle-part{
      overflow: auto;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
}
@media screen and (max-width: 1160px) {
    .App-container{
        width: 1160px;
    }
}
</style>
