<script lang="ts">
    export default {
        name:"Message"
    }
</script>
<template>
    <div class="M-container">
        <img src="../assets/imgs/avatar.jpg" alt="" class="avatar">
        <div class="detail">
            <div class="info">
                <span class="username">ScopeLens</span>
                <span class="date">2024-10-10</span>
            </div>
            <div class="content">
                <div class="otherC">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ab ut repellendus explicabo earum? Itaque, voluptate voluptas, blanditiis dignissimos, saepe eos dolor mollitia nam architecto aliquid assumenda qui perspiciatis totam!</div>
                <div class="userC">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita velit iure facere similique magnam numquam odio ipsum libero. Delectus, non.</div>
            </div>
            <button class="reply">回复</button>
        </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
    .M-container{
        background-color: #dbe2ef;
      margin: 0 20px 20px;
      padding: 20px;
        border: 2px solid black;
        border-radius: 5px;
        display: flex;

      img{
        width: 80px;
        height: 80px;
        object-fit: cover;
        object-position: center;
        border-radius: 50%;
      }

      .detail{
        margin: 0 10px;

        .info{
          display: flex;
          justify-content: space-between;

          .username{
            font-size: 20px;
            font-weight: bold;
          }

          .date{
            color: gray;
          }
        }

        .content{
          .otherC{
            padding: 5px;
          }

          .userC{
            color: gray;
            background-color: #FFFFFF50;
            padding: 10px;

            &::before{
              content: "回复我的：";
            }
          }
        }
      }
    }
    .reply{
        background-color: transparent;
        border: 0px;
        font-size: 15px;
        margin-top: 15px;
        transition: all 0.1s;

      &:hover{
        color: rgb(0, 179, 255);
      }
    }
</style>