<script lang="ts">
    export default {
        name:"PostItem"
    }
</script>
<template>
    <div class="PostItem-container" @click="toDetail">
        <div class="header">
            <div class="content">
                <h3>{{ data.title }}</h3>
                <span>{{ data.content }}</span>
            </div>
            <div class="tag">
                <span v-for="(item, index) in data.tag" :key="index">{{ item }}</span>
            </div>
        </div>
        <div class="body">
            <img v-for="(item, index) in data.img" :key="index" :src="item">
        </div>
        <div class="footer">
            <div class="left">
                <span><i class="iconfont icon-dianzan"></i>{{ data.like }}</span>
                <span><i class="iconfont icon-huifu"></i>{{ data.reply }}</span>
                <span><i class="iconfont icon-shoucang"></i>{{ data.star }}</span>
            </div>
            <div class="right">
                <span class="author">{{ data.author }}</span>
                <span class="date">{{ data.date }} </span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import {useRouter } from 'vue-router';

    const router=useRouter();
    let props=defineProps(["data"]);
    function toDetail(){
        router.push({
            path:'/post',
            query:{
                id:props.data.id
            }
        })
    }
</script>
<style scoped>
.PostItem-container{
    background-color: #dbe2ef;
    margin: 20px;
    padding: 10px;
    border: 2px solid black;
    border-radius: 5px;
}
.header{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.body img{
    width: 100px;
    height: 100px;
    margin: 10px;
}
.footer{
    display: flex;
    justify-content: space-between;
}
.footer .left span:nth-child(2){
    margin: 0px 10px;
}
.footer .right .author{
    margin-right: 10px;
}
</style>