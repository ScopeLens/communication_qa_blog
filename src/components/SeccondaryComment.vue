<script lang="ts">
    export default {
        name:"SecondaryComment"
    }
</script>
<template>
    <div @click="reply" class="SC-container clearfix">
        <span class="user">{{ data.user }}</span>
        <span class="replytext">回复</span>
        <span class="other">{{ data.other }}</span>
        <p class="content">{{ data.content }}</p>
        <span class="date">{{ data.date }}</span>
    </div>
</template>
<script setup lang="ts">
    let props=defineProps(["data"]);
    function reply(){

    }
</script>
<style scoped>
    .SC-container{
        cursor: pointer;
    }
    .clearfix::after{
        content: "";
        display: block;
        clear: both;
    }
    .user{
        color: black;
    }
    .replytext{
        margin: 0px 5px;
    }
    .other{
        color: gray;
        margin-right: 10px;
    }
    .other::after{
        content: ":";
    }
    .content{
        display: inline;
    }
    .date{
        float: right;
        color: rgba(0, 0, 0, 0.416);
    }

</style>