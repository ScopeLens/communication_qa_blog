<template>
    <div class="Search-container">
        <input type="text" ref="keyInput">
        <button @click="sendKey()">{{ target }}</button>
    </div>
</template>
<script setup>
import { ref } from 'vue';

let props=defineProps(["target","sendTarget"]);
let keyInput=ref();

function sendKey(){
    if(keyInput.value.value==="")return;
    props.sendTarget(keyInput.value.value);
    keyInput.value.value="";
}
</script>
<style scoped lang="scss">
    input{
        width: 200px;
        height: 25px;
        border-radius: 5px;
        margin-right: 10px;
        vertical-align: middle;
    }
    button{
        font-size: 20px;
        padding: 0px 5px;
        border-radius: 3px;
        border: 1px solid #797979;
        background-color: antiquewhite;
        vertical-align: middle;
    }
</style>