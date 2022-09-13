<template>
  <!-- franchiser -->
  <section class="franchiser">
    <div class="inner">

      <div class="franchiser-top">
        <h2>MASIGRAY <b>Franchiser</b></h2>
        <span>마시그래이 신규 매장</span>
      </div>

      <ul class="franchiser-list clearfix">
      </ul>

    </div>
  </section>
</template>

<script>
import { onMounted } from '@vue/runtime-core';
import $ from 'jquery';
  
  export default {
    setup(){
      onMounted(() => {
        // 대리점 정보를 생성하는 객채생성함수
        let storeArr = [
          {
            link: '#',
            title: '합천점',
            pic: 'shop1.jpg'
          },
          {
            link: '#',
            title: '신천점',
            pic: 'shop2.jpg'
          },
          {
            link: '#',
            title: '복현푸르지오점',
            pic: 'shop3.jpg'
          },
          {
            link: '#',
            title: '대곡점',
            pic: 'shop4.jpg'
          },
        ];
        let storeList = $('.franchiser-list');
        let storeTotal = storeArr.length;
        let storeHtml = '';
        
        for (let i = 0; i < storeTotal; i++) {
          let storeTxt = `
            <li>
              <a href="${storeArr[i].link}">
                <img src="./images/${storeArr[i].pic}" alt="${storeArr[i].title}">
                <span>${storeArr[i].title}</span>
              </a>
            </li>
          `;
          storeHtml += storeTxt;
        }
        storeList.html(storeHtml);
      });
      return{}
    }
  }
</script>
<style>
  .franchiser-list {
    position: relative;
    display: block;
    margin-top: 40px;
  }

  .franchiser-list li {
    position: relative;
    display: block;
    float: left;
    width: 22%;
    margin-right: 4%;
  }

  .franchiser-list li:last-child {
    margin-right: 0;
  }

  .franchiser-list li a {
    position: relative;
    display: block;
    text-align: center;
  }

  .franchiser-list li a img {
    width: auto;
    height: 324px;
  }

  .franchiser-list li a span {
    position: relative;
    display: block;
    margin-top: 20px;
    color: #fff;
    font-size: 20px;
  }

  @media all and (max-width: 1000px) {
    .franchiser-list {
      margin-top: 4vw;
    }

    .franchiser-list li a img {
      height: 32.4vw;
    }

    .franchiser-list li a span {
      font-size: 15px;
      white-space: nowrap;
      margin-top: 2vw;
    }
  }
</style>

<style scoped>
  /* franchiser */
  .franchiser {
    position: relative;
    display: block;
    background: url('@/assets/images/main-store-bg.png') no-repeat center;
    background-size: cover;
    padding: 100px 0;
  }

  .franchiser .inner {}

  .franchiser-top {
    position: relative;
    display: block;
  }

  .franchiser h2 {
    position: relative;
    display: block;
    font-size: 40px;
    color: #69ccd0;
    font-weight: 300;
    text-align: center;
  }

  .franchiser h2 b {
    font-weight: 500;
  }

  .franchiser span {
    position: relative;
    display: block;
    font-size: 20px;
    color: #666;
    text-align: center;
  }


  /* 프랜차이즈 반응형 영역 */
  @media all and (max-width: 1000px) {
    .franchiser {
      padding: 10vw 0;
    }

    .franchiser-top h2 {
      font-size: 30px;
    }

    .franchiser-top span {
      font-size: 15px;
    }
  }
</style>