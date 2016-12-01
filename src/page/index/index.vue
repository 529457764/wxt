<template>
  <div>
    <header class="header">
      问习题
      <i class="icon i-user"></i>
    </header>
    <!-- search end -->
    <section class="main">
      <!-- search start -->
      <div class="search-row">
        <div class="search radius-5px">
          <i class="icon i-search"></i>
          <input class="search-input" type="text" placeholder="文字+语音 搜题So Easy">
          <i class="icon i-voice"></i>
        </div>
      </div>
      <!-- search end -->
      <!-- photograph start -->
      <div class="photograph-row">
        <a class="photograph" @click="takePhoto($event)">
          <img src="/static/images/photograph.png" alt="拍照">
          <div class="circle circle1"></div>
          <div class="circle circle2"></div>
          <div class="circle circle3"></div>
        </a>
        <input type="hidden" class="photo">
      </div>
      <!-- photograph end -->
      <!-- btn-row -->
      <ul class="btn-row">
        <a class="btn ripple-effect">
          <img src="/static/images/myQuestion.png" alt="我的提问">
          我的提问
        </a>
        <div class="line"></div>
        <a class="btn ripple-effect">
          <img src="/static/images/analysis.png" alt="诊断分析">
          诊断分析
        </a>
      </ul>
      <!-- banner -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><a href="javascript:void(0)"><img src="/static/images/banner01.png"></a></div>
          <div class="swiper-slide"><a href="javascript:void(0)"><img src="/static/images/banner01.png"></a></div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </section>

    <footer class="footer">
      <ul class="nav-row">
        <a class="nav-btn" href="javascript:void(0);">
          <img src="/static/images/btn1.png" alt="我的班">
          我的班
        </a>
        <a class="nav-btn" href="javascript:void(0);">
          <img src="/static/images/btn2.png" alt="家长问">
          家长问
        </a>
        <a class="nav-btn" href="javascript:void(0);">
          <img src="/static/images/btn3-hf.png" alt="问习题">
          问习题
        </a>
        <a class="nav-btn" href="javascript:void(0);">
          <img src="/static/images/btn4.png" alt="老师说">
          老师说
        </a>
        <a class="nav-btn" href="javascript:void(0);">
          <img src="/static/images/btn5.png" alt="都在学">
          都在学
        </a>
      </ul>
    </footer>
  </div>
</template>
<style lang="scss">
  @import '../../assets/scss/index.scss';
  @import '../../../node_modules/swiper/dist/css/swiper.min.css';
</style>
<script type="text/javascript" src="./index.js"></script>
