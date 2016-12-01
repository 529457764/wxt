import common from '../../assets/script/common.js';
import Swiper from 'swiper';
import $ from 'jquery';
export default {
  name: 'index',
  data() {
    return {}
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
      const target = event.currentTarget;
      $(target).addClass('active');
      setTimeout(function() {
        if($(target).hasClass('active')) {
          $(target).removeClass('active');
        }
      }, 1000);
    }
  }
}
