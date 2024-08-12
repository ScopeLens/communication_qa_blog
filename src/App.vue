<script lang="ts">
export default {
    name:"App"
}
</script>
<template>
    <div class="App-container">
        <div class="page-header">
            <div class="nav">
                <span>logo</span>
                <router-link to="/home" replace>主页</router-link>
                <router-link to="/ranklist" replace>排行</router-link>
                <Search target="搜索帖子" :sendTarget="toRankList"></Search>
                <Search target="搜索用户" :sendTarget="toUserList"></Search>
                <router-link v-if="isShow" to="/post/editpost">发布博文</router-link>
                <router-link v-else to="/login">登录</router-link>
            </div>
            <div class="banner"></div>
        </div>
        <PersonalWindow></PersonalWindow>
        <div class="page-body">
            <router-view></router-view>
        </div>
        <div class="page-footer">

        </div>
    </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import Search from './components/Search.vue';
import PersonalWindow from './components/PersonalWindow.vue';
import CookieTool from './utils/cookie';
import { computed } from 'vue';

    let isShow=computed(()=>{
        return CookieTool.getCookie("isLogin");
    })

    const router=useRouter();
    // function toRankList(value){
    //     router.replace({
    //         path:'/ranklist',
    //         query:{
    //             keyword:value
    //         }
    //     });
    // }
    // function toUserList(value){
    //     router.replace({
    //         path:'/userlist',
    //         query:{
    //             keyword:value
    //         }
    //     });
    // }

</script>
<style scoped>
.App-container{
    width: 100%;
    height: 100vh;
    background-image: url("./assets/imgs/bg-cover.jpeg");
    background-size: cover;
    background-repeat: no-repeat;
}
.App-container .page-header{
    height: 80px;
    background-image: url("./assets/imgs/top-cover.jpeg");
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom: 5px;
}
.App-container .page-header .nav{ 
    width: 70%;
    margin: 0 auto;
    display: flex;
    line-height: 80px;
    justify-content: space-evenly;
}
.App-container .page-header .nav a{
    text-decoration: none;
    color: #eeeeee;
    font-size: 20px;
    font-weight: bold;
    text-shadow: 0px 0px 10px black;
    transition: 0.1s all;
}
.App-container .page-header .nav a:hover{
    transform: scale(1.2);
}
.App-container .page-body{
    width: 60%;
    height: calc(100vh - 85px);
    margin: 0 auto;
    position: relative;
    overflow: auto;
}
.App-container .page-body::-webkit-scrollbar {
  display: none;
}
</style>
