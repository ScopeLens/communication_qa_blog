<script lang="ts">
    export default {
        name:"Comment"
    }
</script>
<template>
    <div class="Comment-container">
        <img src="../assets/imgs/avatar.jpg" alt="" class="avatar">
        <div class="user-data">
            <h2 class="username">ScopeLens</h2>
            <p class="c-body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam enim, velit vero, temporibus repudiandae autem rerum impedit, cumque cupiditate delectus tempore labore deleniti. Nulla iusto qui quae dolorum, aspernatur necessitatibus voluptates maxime iure nihil et minima fugit sed reprehenderit officiis dolores ab non placeat possimus vitae nisi id accusantium vero, explicabo tempore. Maiores tenetur asperiores provident officia eos, cumque praesentium dolor quidem quis ut laborum cupiditate, voluptates recusandae veniam harum vel obcaecati architecto deleniti soluta dolores. Unde perspiciatis nam voluptates sapiente soluta possimus repellat quam quibusdam deleniti illum. Ipsum, modi ex. Assumenda neque dolorem repellendus modi sequi dignissimos non beatae!</p>
            <div class="comment-nav">
                <span class="date">2004-1-1 10:11</span>
                <span class="like"><i class="iconfont icon-dianzan"></i>100</span>
                <button @click="replyShow=!replyShow">回复</button>
            </div>
            <div class="more-comment">
                <span class="open-list" @click="isShow=!isShow" v-show="!isShow">共有{{SClist.length}}条回复,点击查看</span>
                <div class="comment-list" v-show="isShow">
                    <SeccondaryComment v-for="(item, index) in SClist" :key="index" :data="item" @click="replyShow=!replyShow"></SeccondaryComment>
                </div>
            </div>
            <Reply v-show="replyShow"></Reply>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import SeccondaryComment from './SeccondaryComment.vue';
import Reply from './Reply.vue';
    let isShow=ref(false);
    let replyShow=ref(false);
    let SClist=ref([
        {
            user:"ScopeLens",
            other:"Person",
            content:"asj;gafdijapeogjrgjvaeo;vijarepgojgeofivmdpvnar",
            date:"2024-1-10 10:20"
        },
        {
            user:"ScopeLens",
            other:"Person",
            content:"asj;gafdijapeogjrgjvaeo;vijarepgojgeofivmdpvnar",
            date:"2024-1-10 10:20"
        }
    ]);
</script>
<style scoped lang="scss">
    .Comment-container{
        margin: 15px 0;
        padding: 10px;
        display: flex;
        border-bottom: 2px solid gray;

      img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 10px;
      }
    }
    .user-data .c-body{
        margin:5px 0;
    }
    .comment-nav{
        margin: 5px 0px;
        font-size: 15px;

      .like{
        margin: 0 25px;
      }

      >button{
        border: 0;
        background-color: transparent;
      }
    }
    .open-list{
        color: gray;
        cursor: pointer;
    }
</style>