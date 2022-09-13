<template>
  <div class="wrap">
    <ModalV/>
    <GoTopBtn/>
    <MobileMenu/>
    <FixMenu/>

    <HeaderV/>
    <VisualV/>
    <ItemV/>
    <BevarageV/>
    <FranchiserV/>
    <SnsV/>
    <FooterV/>
  </div>
</template>

<script>
  import ModalV from '@/components/ModalView.vue';
  import GoTopBtn from '@/components/GoTopBtn.vue';
  import MobileMenu from '@/components/MobileMenu.vue';
  import FixMenu from '@/components/FixMenu.vue';
  import HeaderV from '@/components/HeaderView.vue';
  import VisualV from '@/components/VisualView.vue';
  import ItemV from '@/components/ItemView.vue';
  import BevarageV from '@/components/BevarageView.vue';
  import FranchiserV from '@/components/FranchiserView.vue';
  import SnsV from '@/components/SnsView.vue';
  import FooterV from '@/components/FooterView.vue';

  // 공통으로 관리되는 state를 참조. 여기서는 actions를 호출하는 용도로 사용
  // vuex를 참조하는 객체로 접근하려고 하면 아래 구문으로 접근 가능하다.
  import { useStore } from 'vuex';

  export default {
    name: 'App',
    components: {
    ModalV,
    GoTopBtn, 
    MobileMenu,
    FixMenu,
    HeaderV,
    VisualV,
    ItemV,
    BevarageV,
    FranchiserV,
    SnsV,
    FooterV
    },
    setup(){
      // 외부에 있는 menu.json 파일을 불러오기 위해 actions를 활용
      const store = useStore();
      // actions 의 method(function)를 사용할 때 문법
      // store.dispatch('method name')
      store.dispatch('fetchMenuData');

      return {

      }
    }
  }
</script>

<style>
  @charset "utf-8";

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline-style: none;
  }

  ul,
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  img {
    vertical-align: top;
    border: 0;
  }

  html {
    font-size: 16px;
    overflow-x: hidden;
  }


  body {
    font-family: 'NanumSquare', 'Malgun Gothic', '맑은 고딕', "돋움", Verdana, sans-serif;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.5px;
    line-height: 1.6;
    color: #888;
    overflow-x: hidden;
  }

  /* 공통(재사용) */
  .inner {
    position: relative;
    display: block;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
  }

  .clearfix::after {
    content: '';
    position: relative;
    display: block;
    width: 100%;
    clear: both;
  }

  /* Layout */
  .wrap {
    position: relative;
    display: block;
  }
</style>