<template>
    <div class="PL-container">
        <PostItem v-for="item in postList" :key="item.id" :data="item"></PostItem>
    </div>
</template>
<script setup>
import PostItem from './PostItem.vue';
    defineProps(['postList'])
</script>
<style>

</style>