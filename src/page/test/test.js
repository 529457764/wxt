/**
 * Created by defore on 2016/12/2.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import $ from 'jquery';
import yx from '../../assets/script/api.js';
import Detail from './detail/detail.vue';
Vue.use(VueRouter);
export default {
  name: 'test',
  data() {
    return {
      hkList: []
    }
  },
  created() {
    yx.init();
    this.getHkList();
  },
  methods: {
    /**
     * 获取作业列表
     */
    getHkList() {
      //注意this不要被污染
      let _this = this;
      yx.ajax_({
        url: '/static/data/hkList.json',
        data: {name: 1},
        method: 'GET',
        success: (result)=> {
          let data = result.data;
          let hkList = data.hkList;
          for(let i in hkList) {
            hkList[i].isClicked = false;
          }
          _this.hkList = data.hkList;
          // _this.hkList = data.hkList;
        }
      })
    },
    /**
     * 跳转至详情页面
     */
    touchHkItem(params, event) {
      let id = params.id || 0;
      let index = params.index || 0;
      this.$router.push('/test/detail/'+id);
    }
  }
}
