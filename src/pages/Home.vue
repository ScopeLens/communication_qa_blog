<script lang="ts">
    export default {
        name:"Home",
        beforeRouteEnter(to, from, next){
            next(
                ()=>{
                    if(from.path==="/login"&&CookieTool.getCookie("isLogin")){
                        window.location.reload();
                    }
                }
            ); 
        }
    }
</script>
<template>
    <div class="Home-container">
        <SortModeMenu :sendMode="getList" :list="postlist"></SortModeMenu>
        <div class="content">
            <PostList :postlist="postlist"></PostList>
        </div>
    </div>
</template>
<script setup lang="ts">
import SortModeMenu from '../components/SortModeMenu.vue';
import CookieTool from '../utils/cookie';
import PostList from '../components/PostList.vue';
    let postlist=[
        {
            id:1,
            title:"震惊！！！！！",
            content:"XXXXXXXXXXXXXXXXXXXX",
            tag:['军事','坦克'],
            img:["src"],
            watch:1000,
            like:99,
            reply:100,
            star:1111,
            author:"ScopeLens",
            date:"2024-1-1 10:00"
        },
        {
            id:2,
            title:"震惊！！！！！",
            content:"XXXXXXXXXXXXXXXXXXXX",
            tag:['军事','坦克'],
            img:["src"],
            watch:1000,
            like:99,
            reply:100,
            star:1111,
            author:"ScopeLens",
            date:"2024-1-1 10:00"
        },
        {
            id:3,
            title:"震惊！！！！！",
            content:"XXXXXXXXXXXXXXXXXXXX",
            tag:['军事','坦克'],
            img:["src"],
            watch:1000,
            like:99,
            reply:100,
            star:1111,
            author:"ScopeLens",
            date:"2024-1-1 10:00"
        },
        {
            id:4,
            title:"震惊！！！！！",
            content:"XXXXXXXXXXXXXXXXXXXX",
            tag:['军事','坦克'],
            img:["src"],
            watch:1000,
            like:99,
            reply:100,
            star:1111,
            author:"ScopeLens",
            date:"2024-1-1 10:00"
        },
        {
            id:5,
            title:"震惊！！！！！",
            content:"XXXXXXXXXXXXXXXXXXXX",
            tag:['军事','坦克'],
            img:["src"],
            watch:1000,
            like:99,
            reply:100,
            star:1111,
            author:"ScopeLens",
            date:"2024-1-1 10:00"
        },
        {
            id:6,
            title:"震惊！！！！！",
            content:"XXXXXXXXXXXXXXXXXXXX",
            tag:['军事','坦克'],
            img:["src"],
            watch:1000,
            like:99,
            reply:100,
            star:1111,
            author:"ScopeLens",
            date:"2024-1-1 10:00"
        },
    ]
    function getList(list:any){
        console.log(list)
    }
</script>
<style scoped>
.Home-container{
    position: relative;
}
.Home-container .content{
    overflow: auto;
}
</style>