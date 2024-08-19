<script lang="ts">
    export default {
        name:"EditPost"
    }
</script>
<template>
    <div class="EP-container">
        <div class="title">
            <h2 class="h2-color">标题</h2>
            <input type="text" class="baseSize">
        </div>
        <div class="content">
            <h2 class="h2-color">正文</h2>
            <textarea class="baseSize" placeholder="支持markdown语法"></textarea>
        </div>
        <div class="footer">
            <h2 class="h2-color">图片</h2>
            <ul>
                <li v-for="(item, index) in imglist" :key="index"><img :src="item"></li>
            </ul>
            <button @click="uploadImg">
                <i class="iconfont icon-tianjia"></i>
                <input type="file" accept="image/png, image/jpeg, image/gif, image/jpg">
            </button>
        </div>
        <div class="nav">
            <button @click="uploadPost">发布</button>
        </div>
    </div>
</template>
<script setup lang="ts">
    import MarkdownIt from 'markdown-it'
import { ref } from 'vue';
    const md = new MarkdownIt();
    let imglist=ref([])
    function uploadImg(){

    }
    function uploadPost(){
        let result=confirm("确认发布")
    }
</script>
<style scoped> 
    .EP-container{
        margin: 20px;
        margin-top: 0px;
        background-color: white;
        border-radius: 10px;
        padding: 15px;
    }
    .h2-color{
        color: gray;
    }
    .baseSize{
        width: calc(100% - 26px);
        padding: 10px;
        height: 20px;
        margin: 10px 0px;
        font-size: 20px;
        border: 3px solid black
    }
    .content textarea{
        resize: none;
        height: 400px;
    }
    .footer ul{
        margin: 10px 0px;
    }
    .footer button{
        width: 100px;
        height: 100px;
        position: relative;
    }
    .footer button>input{
        opacity: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
    }
    .footer button i{
        color: gray;
        font-size: 30px;
    }
    .nav{
        margin: 10px 0px;
        display: flex;
        flex-direction: row-reverse;
    }
    .nav button{
        width: 90px;
        height: 40px;
        background-color: rgb(0, 153, 255);
        border: 0;
        font-size: 20px;
        color: white;
        border-radius: 10px;
    }
</style>