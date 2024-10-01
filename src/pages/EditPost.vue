<script lang="ts">
    export default {
        name:"EditPost"
    }
</script>
<template>
    <div class="EP-container">
        <div class="title">
            <h2 class="h2-color">标题</h2>
            <input type="text" class="baseSize">
        </div>
        <div class="content">
            <h2 class="h2-color">正文</h2>
            <textarea class="baseSize" placeholder="支持markdown语法"></textarea>
        </div>
        <div class="footer">
            <h2 class="h2-color">图片</h2>
            <ul>
                <li v-for="(item, index) in imglist" :key="index"><img :src="item">
                    <button @click="delImg(index)">
                        <i class="iconfont icon-cha"></i>
                    </button>
                </li>
            </ul>
            <button>
                <i class="iconfont icon-tianjia"></i>
                <input type="file" accept="image/*" ref="imgUrlValue"@change="uploadImg">
            </button>
        </div>
        <div class="nav">
            <button @click="uploadPost">发布</button>
        </div>
    </div>
</template>
<script setup lang="ts">
import MarkdownIt from 'markdown-it'
import { ref } from 'vue';

    const md = new MarkdownIt();
    let fileReader=new FileReader();
    let imgUrlValue=ref();
    let imgList=ref([]);
    fileReader.addEventListener("load",()=>{
      imgList.value.push(filereader.result);
    })
    function uploadImg(){  
        let fileList=imgUrlValue.value.files[0];
        filereader.readAsDataURL(fileList);
        imgUrlValue.value.value="";
    }
    function uploadPost(){
      ElMessageBox.confirm(
          '确认发布？',
          '确认',
          {
            confirmButtonText: '发布',
            cancelButtonText: '取消',
          }
      )
          .then(() => {
            ElMessage({
              type: 'success',
              message: '发布成功',
            })
          })
          .catch(() => {
            ElMessage({
              type: 'info',
              message: '取消发布',
            })
          })
    }
    function delImg(index:number){
      imgList.value.splice(index,1);
    }
</script>
<style scoped lang="scss">
    .EP-container{
      margin: 0 20px 20px;
      background-color: white;
        border-radius: 10px;
        padding: 15px;
    }
    .h2-color{
        color: gray;
    }
    .baseSize{
        width: calc(100% - 26px);
        padding: 10px;
        height: 20px;
        margin: 10px 0px;
        font-size: 20px;
        border: 3px solid black
    }
    .content textarea{
        resize: none;
        height: 400px;
    }
    .footer{
      ul{
        margin: 10px 0;

        li{
          display: inline-block;
          margin: 0 10px 10px 0;
          position: relative;

          img{
            width: 100px;
            height: 100px;
            object-fit: contain;
          }

          >button{
            width: 20px;
            height: 20px;
            position:absolute;
            text-align: center;
            line-height: 20px;
            top: 0;
            right: 0;
            background-color: gray;
            border: 0;

            >i{
              color: white;
              font-size: 20px;
              font-weight: bold;
            }
          }
        }
      }

      button{
        width: 100px;
        height: 100px;
        position: relative;

        >input{
          opacity: 0;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          position: absolute;
        }

        i{
          color: gray;
          font-size: 30px;
        }
      }
    }
    .nav{
        margin: 10px 0px;
        display: flex;
        flex-direction: row-reverse;

      button{
        width: 90px;
        height: 40px;
        background-color: rgb(0, 153, 255);
        border: 0;
        font-size: 20px;
        color: white;
        border-radius: 10px;
      }
    }
</style>