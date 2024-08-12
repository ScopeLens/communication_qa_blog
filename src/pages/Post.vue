<script lang="ts">
    export default {
        name:"Post"
    }
</script>
<template>
    <div class="Post-container">
        
    </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute} from 'vue-router';

    const route=useRoute()
    
    onMounted(()=>{
        console.log(route.query)
    })
</script>
<style>

</style>