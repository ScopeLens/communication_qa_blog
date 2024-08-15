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
                <button>回复</button>
            </div>
            <div class="more-comment">
                <span>共有xx条回复,点击查看</span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>
<style scoped>
    .Comment-container{
        margin: 15px 0px;
        padding: 10px;
        display: flex;
        border-bottom: 2px solid gray;
    }
    .Comment-container img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 10px;
    }
    .user-data .c-body{
        margin:5px 0px;
    }
    .comment-nav{
        margin: 5px 0px;
        font-size: 15px;
    }
    .comment-nav .like{
        margin: 0px 25px;
    }
</style>