<script lang="ts">
    export default {
        name:"PostList"
    }
</script>
<template>
    <div class="PL-container">
        <PostItem v-for="item in postlist" :key="item.id" :data="item"></PostItem>
    </div>
</template>
<script setup lang="ts">
import PostItem from './PostItem.vue';
    defineProps(['postlist'])
</script>
<style>

</style>