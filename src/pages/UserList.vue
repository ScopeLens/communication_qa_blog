<template>
    <div class="UL-container">
        <UserItem></UserItem>
        <UserItem></UserItem>
        <UserItem></UserItem>
    </div>
</template>
<script setup lang="ts">
import UserItem from '../components/UserItem.vue';

</script>
<style>
.UL-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
}
</style>