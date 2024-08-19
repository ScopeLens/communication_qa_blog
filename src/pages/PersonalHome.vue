<script lang="ts">
    export default {
        name:"",
    }
</script>
<template>
    <div class="PH-container">
        <div class="info">
            <img :src="userinfo.bgimg" class="bg-img">
            <img :src="userinfo.avatar" class="avatar-img">
            <div class="detail">
                <h2>{{ userinfo.username }}</h2>
                <div class="Ftwo">
                    <span>粉丝数:11</span>
                    <span>关注数:11</span>
                </div>
                <div class="nav">
                    <button>加入黑名单</button>
                    <button>关注</button>
                </div>
            </div>
        </div>
        <PostList :postlist="postlist"></PostList>
    </div>
</template>
<script setup lang="ts">
    import { useRoute } from 'vue-router';
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
    const route = useRoute()
    let userinfo={
        username:"ScopeLens",
        bgimg:"https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        avatar:"https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
</script>
<style scoped>
    .info{
        height: 500px;
        margin: 20px;
        margin-top: 0px;
        border-radius: 10px;
        background-color: white;
        text-align: center;
    }
    .info .bg-img{
        width: 100%;
        height: 250px;
        object-fit: cover;
        object-position: center;
        margin: 0px -20px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;

    }
    .info .avatar-img{
        width: 200px;
        height: 200px;
        border-radius: 50%;
        position: relative;
        transform: translateY(-50%);
        object-fit: cover;
        object-position: center;
    }
    .info .detail{
        display: flex;
        flex-direction: column;
        align-items: center;
        transform: translateY(-100px);
    }
    .info .detail .Ftwo{
        width: 180px;
        display: flex;
        justify-content: space-evenly;
    }
    .info .detail .nav{
        width: 200px;
        margin: 10px;
        display: flex;
        justify-content: space-between;
    }
    .info .detail .nav button{
        font-size: 15px;
        border: 0;
        background-color: transparent;
        transition: all 0.1s;
    }
    .info .detail .nav button:hover{
        color: rgb(0, 179, 255);
        transform: scale(1.1);
    }
</style>