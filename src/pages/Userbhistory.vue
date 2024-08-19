<script lang="ts">
    export default {
        name:"Userbhistory"
    }
</script>
<template>
    <div>
        <PostList :postlist="postlist"></PostList>
    </div>
</template>
<script setup lang="ts">
import PostList from '../components/PostList.vue';
let postlist=[
        {
            id:1,
            title:"震惊！！！！！",
            content:"XXXXXXXXXXXXXXXXXXXX",
            tag:['军事','坦克'],
            img:["src"],
            watch:1000,
            like:99,
            reply:100,
            star:1111,
            author:"ScopeLens",
            date:"2024-1-1 10:00"
        },
        {
            id:2,
            title:"震惊！！！！！",
            content:"XXXXXXXXXXXXXXXXXXXX",
            tag:['军事','坦克'],
            img:["src"],
            watch:1000,
            like:99,
            reply:100,
            star:1111,
            author:"ScopeLens",
            date:"2024-1-1 10:00"
        },
        {
            id:3,
            title:"震惊！！！！！",
            content:"XXXXXXXXXXXXXXXXXXXX",
            tag:['军事','坦克'],
            img:["src"],
            watch:1000,
            like:99,
            reply:100,
            star:1111,
            author:"ScopeLens",
            date:"2024-1-1 10:00"
        },
        {
            id:4,
            title:"震惊！！！！！",
            content:"XXXXXXXXXXXXXXXXXXXX",
            tag:['军事','坦克'],
            img:["src"],
            watch:1000,
            like:99,
            reply:100,
            star:1111,
            author:"ScopeLens",
            date:"2024-1-1 10:00"
        },
        {
            id:5,
            title:"震惊！！！！！",
            content:"XXXXXXXXXXXXXXXXXXXX",
            tag:['军事','坦克'],
            img:["src"],
            watch:1000,
            like:99,
            reply:100,
            star:1111,
            author:"ScopeLens",
            date:"2024-1-1 10:00"
        },
        {
            id:6,
            title:"震惊！！！！！",
            content:"XXXXXXXXXXXXXXXXXXXX",
            tag:['军事','坦克'],
            img:["src"],
            watch:1000,
            like:99,
            reply:100,
            star:1111,
            author:"ScopeLens",
            date:"2024-1-1 10:00"
        },
    ]
</script>
<style>

</style>