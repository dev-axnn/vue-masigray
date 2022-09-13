<template>
  <!-- Go top -->
  <button class="gotop"></button>
</template>

<script>
  import { onMounted } from 'vue';
  import $ from 'jquery';

  export default {
    setup(){
      onMounted(() => {
        // 위로가기 기능
        let go_top = $('.gotop');
        go_top.click(function(){
          $('html').animate({scrollTop:0}, 1000);
        });
      });
      return{

      };
    }
  }
</script>

<style scoped>
  /* Go top */
  .gotop {
    position: fixed;
    right: 10px;
    bottom: 10px;
    display: block;
    width: 40px;
    height: 40px;
    background: url('@/assets/images/btn_top_off.png') no-repeat center;
    background-size: cover;
    border: 0;
    cursor: pointer;
    z-index: 999;
  }
</style>