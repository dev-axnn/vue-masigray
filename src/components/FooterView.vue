<template>
  <!-- footer -->
  <footer class="footer">
    <div class="inner">

      <ul class="footer-menu clearfix">
        <li><a href="#">점주의 방</a></li>
        <li class="resfooter"><a href="#">회사소개</a></li>
        <li><a href="#">개인정보취급방침</a></li>
        <li><a href="#">이메일무단수집거부</a></li>
        <li class="resfooter"><a href="#">가맹문의</a></li>
        <li class="resfooter"><a href="#">고객의 소리</a></li>
      </ul>

      <hr>

      <a href="#" class="footer-logo">
        <img src="@/assets/images/f_logo.png" alt="마시그래이">
      </a>

      <hr>

      <p class="footer-copy">
        (주) 에스이엠 <i class="bar"></i> 사업자등록번호 : 502 - 86 - 32017 <i class="bar"></i> 대표이사 : 정영주 <i class="bar resbar"></i><br>
        주소 : 대구광역시 수성구 만촌동 957-2번지 2층 <i class="bar"></i> 전화 : 1899-2087 <i class="bar"></i> 팩스 : 053-474-9522
      </p>

      <hr>

      <ul class="footer-sns clearfix">
        <li><a href="#"><img :src="require('@/assets/images/f_sns_1.png')" alt="blog"></a></li>
        <li><a href="#"><img :src="require('@/assets/images/f_sns_2.png')" alt="instagram"></a></li>
        <li><a href="#"><img :src="require('@/assets/images/f_sns_3.png')" alt="facebook"></a></li>
      </ul>

    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
  /* footer */
  .footer {
    position: relative;
    display: block;

    background-color: #262626;
    padding: 25px 0;
  }

  .footer .inner {
    text-align: center;  
  }

  .footer .inner hr {
    border: 1px solid #262626;
  }
  .footer-menu {
    position: relative;
    display: inline-block;

    white-space: nowrap;
  }
  .footer-menu li {
    position: relative;
    display: inline-block; 
    padding: 0 21px;
  }

  .footer-menu li a {  
    position: relative;
    display: block;

    font-size: 16px;
    line-height: 30px;
    color: #9e9e9e;

  }


  .footer-logo {
    position: relative;
    display: inline-block;
    margin-top: 25px;
    margin-bottom: 20px;
  }

  .footer-copy {
    position: relative;
    display: inline-block;
    margin-bottom: 30px;
    font-size: 13px;
    color: #9e9e9e;
  }

  .bar {
    position: relative;
    display: inline-block;
    margin: 0 10px;
    vertical-align: 0;
  }

  
  .resbar {
    display: none;
  }

  .bar::after {
    content: '';
    position: absolute;
    left: 0;
    top: -10px;
    display: block;
    width: 1px;
    height: 12px;
    background-color: #9e9e9e;
  }

  .footer-sns {
    position: relative;
    display: inline-block;
  }

  .footer-sns li {  
    position: relative;
    display: block;
    float: left;
    padding: 0 3px;
  }
  .footer-sns li a {
    position: relative;
    display: block;
  }

  @media all and (max-width:1000px) {  
    .footer-menu li {
      padding: 0 2.1vw;
    }
    .footer-menu li a {
      font-size: 13px;
    }
  }

  @media all and (max-width:580px) {
    .footer-logo {
      margin-top: 15px;
      margin-bottom: 15px;
    }

    .footer-logo img {
      width: 120px;
    }

    .footer-menu li {
      padding: 0 0.8vw;
    }

    .footer-menu li a {
      font-size: 11px;
    }

    .footer-copy {
      font-size: 11px;
    }

    .resbar {
      display: inline-block;
    }

    .footer-copy br {
      display: none;
    }
  }

  @media all and (max-width:400px) {
    .resfooter {
      display: none !important;
    }
  }
</style>