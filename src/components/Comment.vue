<script lang="ts">
    export default {
        name:"Comment"
    }
</script>
<template>
    <div class="Comment-container">
        <div class="content">
            <div class="user-data">
                <img src="" alt="用户头像">
                <span></span>
            </div>
            <div class="user-comment"></div>
        </div>
        <div class="nav">
            <button>回复</button>
        </div>
        <div class="other-comment"></div>
    </div>
</template>
<script setup lang="ts">
</script>
<style scoped>
    .Comment-container{
        margin: 15px 0px;
        padding: 10px;
        border: 2px solid black;
    }
</style>