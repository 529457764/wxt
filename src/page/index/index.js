import Vue from 'vue';
import VueRouter from 'vue-router';
import common from '../../assets/script/common.js';
import Swiper from 'swiper';
import $ from 'jquery';
Vue.use(VueRouter);
export default {
  name: 'index',
  data() {
    return {
      photographClicked: false
    }
  },
  created: function() {
    common.init();
    this.setSwiper();
  },
  methods: {
    /**
     * 1.设置swper轮播
     */
  	setSwiper() {
      $(function() {
        var mySwiper = new Swiper('.swiper-container', {
          speed: 400,
          spaceBetween: 100,
          pagination : '.swiper-pagination',
        });
      });
  	},
    /**
     * 2.点击拍照
     */
    takePhoto(evnet) {
      event.stopPropagation();
      const _this = this;
      _this.photographClicked = true;
      setTimeout(function() {
        _this.photographClicked = false;
      }, 1000);
      $.ajax({
        url: '/static/data/test.json',
        data: {name: 1},
        success: (data, status)=> {
          console.log("成功",data);
        },
        error: (data, status)=> {
          console.log("失败",data);
        }
      })
    },
    /**
     * 3.跳转页面
     * @param url
     */
    goPage(url) {
      this.$router.push(url);
    }
  }
}
