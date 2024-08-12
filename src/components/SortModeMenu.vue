<script lang="ts">
    export default {
        name:"SortModeMenu"
    }
</script>
<template>
    <div class="nav">
        <select name="" id="" :value="sortmode">
            <option value="1">最新发布</option>
            <option value="2">最多点赞</option>
            <option value="3">最多回复</option>
            <option value="4">最多收藏</option>
        </select>
    </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';
    let props=defineProps(["postlist","sendList"])
    let sortmode=ref(1);
    watch(sortmode,(newValue)=>{
        props.sendList(newValue);
    })
</script>
<style scoped>
.nav{
    position: absolute;
    right: 20px;
    top: -5px;
    color: red;
    cursor: pointer;
}
</style>