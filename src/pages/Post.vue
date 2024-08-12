<script lang="ts">
    export default {
        name:"Post"
    }
</script>
<template>
    <div class="Post-container">
        <div class="post-title">
            <h1>{{ postinfo.title }}</h1>
        </div>
        <div class="post-info">
            <div class="user-data">
                <img :src="userinfo.avatar" alt="">
                <span>{{ userinfo.username }}</span>
            </div>
            <div class="browse-data">
                <span><i class="iconfont icon-kanguo"></i>{{ postinfo.watch }}</span>
                <span><i class="iconfont icon-dianzan"></i>{{ postinfo.like }}</span>
                <span><i class="iconfont icon-huifu"></i>{{ postinfo.reply }}</span>
                <span><i class="iconfont icon-shoucang"></i>{{ postinfo.star }}</span>
            </div>
        </div>
        <div class="post-content">
            <div class="content-data">
                {{ postinfo.content }}
            </div>
            <div class="content-img">
                <img :src="userinfo.avatar" alt="">
            </div>
            <div class="content-tag">
                <span v-for="(item, index) in postinfo.tag" :key="index">{{ item }}</span>
            </div>
        </div>
        <hr>
        <div class="comment-list">
            <h2>评论:</h2>
            <Comment></Comment>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute} from 'vue-router';
import Comment from '../components/comment.vue';

    let postinfo={
        id:1,
        title:"震惊！！！！！",
        content:`
                fasld;fjas;dlfjasd;lfjas;dlfjas;dfjasd;lfjsd        
                fasld;fjas;dlfjasd;lfjas;dlfjas;dfjasd;lfjsd 
                fasld;fjas;dlfjasd;lfjas;dlfjas;dfjasd;lfjsd 
                `,
        tag:['军事','坦克'],
        img:["src"],
        watch:1000,
        like:99,
        reply:100,
        star:1111,
        author:"ScopeLens",
        date:"2024-1-1 10:00"
    }
    let userinfo={
        username:"ScopeLens",
        avatar:"https://images.pexels.com/photos/27466821/pexels-photo-27466821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
    const route=useRoute()
    
    onMounted(()=>{
        console.log(route.query)
    })
</script>
<style scoped>
.Post-container{
    padding: 20px;
    margin: 20px 23px;
    border-radius: 10px;
    background-color: white;
}
.post-title{
    font-size: 20px;
    margin: 10px;
}
.post-info{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.post-info .user-data{
    display: flex;
    align-items: center;
    margin: 10px;
}
.post-info .user-data img{
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 50%;
}
.post-info .user-data span{
    font-size: 20px;
    margin: 10px;
}
.post-info .browse-data{
    display: flex;
    align-items: center;
}
.post-info .browse-data span{
    margin: 0px 10px;
}
.post-content{
    margin: 10px;
}
.post-content .content-data{
    font-size: 20px;
    color: rgb(35, 31, 31);
    margin-bottom: 20px;
}
.post-content .content-img img{
    margin: 20px 0px;
}
.comment-list{
    margin: 10px;
}
</style>