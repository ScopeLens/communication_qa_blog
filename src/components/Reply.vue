<script lang="ts">
    export default {
        name:""
    }
</script>
<template>
     <div class="reply-content">
        <div class="info">
            <img src="../assets/imgs/avatar.jpg" alt=""> <!-- 获取当前用户的头像信息 -->
        </div>
        <div class="nav">
            <textarea type="text" ref="replycontent" placeholder="发言表明态度,我想我可以更酷..."></textarea>  <!--回复框-->
            <button @click="sendReply">发布</button>
        </div>
    </div>
</template>
<script setup lang="ts">
    function sendReply(){
        
    }
</script>
<style scoped> 
    .reply-content{
        margin: 10px 0px;
        display: flex;
        align-items: center;
    }
    .reply-content .info img{
        width: 70px;
        height: 70px;
        border-radius: 50%;
        margin-right: 10px;
    }
    .reply-content .nav{
        display: flex;
        flex-direction: column;
        align-items: right;
        flex-grow: 1;
    }
    .reply-content .nav button{
        height: 20%;
        font-size: 15px;
        background-color: black;
        color: white
    }
    .reply-content .nav textarea{
        font-size: 18px;
        padding: 5px;
        resize: none;
    }
</style>