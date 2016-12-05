const yx = {
  /**
   * 获取json
   * @param obj
   * @param name
   * @returns {*}
   */
  getJsonValue(obj, name) {
		let result = null,
			value = null;
		for(let key in obj) {
			value = obj[key];
			if(key === name) {
				return value;
			} else {
				if (typeof value === 'object') {
					result = this.getJsonValue(value, name);
				}
			}
		}
	},
  /**
   * 默认配置
   */
	config : {
		cookieTime: 2,
		success: 'C200'
	},
  /**
   * 配置domain
   * @returns {string}
   */
	setDomain() {
    let domain = '';
    let href = location.href;
    if (href.indexOf('pc-static.dev') >= 0) {
      domain = 'http://localhost:8084';
    }
    return domain;
	},
  /**
   * ajax响应code
   */
  ajaxCode : {
    C200 : '处理成功',
    C500 : '处理失败',
    C501 : '未登录',
    C502 : '未设置学校和年级',
    C503 : '未设置教材版本'
  },
  dialog : {
    'dialog-forget' : '忘记密码',
    'dialog-register' : '注册',
    'dialog-register-success' : '',
    'dialog-register-fail' : '',
    'dialog-login' : ''
  },
  /**
   * 封装ajax，调用方式：yx.ajax_({...})
   * @param arg
   * @private
   */
  ajax_ : function(arg){
    var c = {
        method : arg.method || 'post',
        data : arg.data || '',
        url : arg.url || "",
        async : arg.async || true,
        dataType : arg.dataType || 'json',
        complete : function(su){
            console.log("%cresponse: ", su,"\nparams: ",arg.data,"\nurl: ",this.url);
            // if(su.code == 'C200'){
            arg.success && arg.success.apply(this, arguments);
            // };
        }
    };
    $.ajax({
        type: c.method, // you request will be a post request
        //crossDomain : true,
        xhrFields : { withCredentials : true },
        data: c.data, // javascript object with all my params
        url: yx.config.domain + c.url,
        dataType: c.dataType, // datatype can be json or jsonp
        success: c.complete
    });
  },
  /**
   * 封装cookie
   */
  cookie : {
    set(objName, objValue, objHours) {
      let str = objName += '=' + escape(objValue);
      if(objHours > 0) {
        let date = new Date();
        let ms = objHours * 3600 * 1000;
        data.setTime(date.getTime() + ms);
        str += "; expires=" + date.toGMTString() + "; path=/";
      }
      document.cookie = str;
    },
    get(objName) {
      let arrStr = document.cookie.split('; ');
      for(let i=0; i<arrStr.length; i++) {
        let temp = arrStr[i].split('=');
        if(temp[0] == objName) {
          return unescape(temp[1]);
        }
      }
    },
    del(name) {
      let date = new Date();
      date.setTime(date.getTime() - 10000);
      document.cookie = name + "=a; expires=" + date.toGMTString() + "; path=/";
    },
    getItem(name, item) {
      var json = eval("(" + this.get(name) + ")");
      return json[item];
    }
  },
  /**
   * console.log缩写
   * @param text
   */
  log(text) {
    console.log(text);
  },
  user : {
    tripleDesEncrypt : function (val){
      return tripleDesEncrypt(val,"yx360","qPaLzM","1@3$5^");
    }
  },
  /**
   * 日期
   * @param fmt_
   * @param d
   * @returns {*|string}
   */
  date(fmt_,d) {
    var t = (typeof d == 'number' ? new Date(d) :  d) || new Date(),
      fmt = fmt_ || "yyyy-MM-dd hh:mm:ss";
    var o = {
      "M+": t.getMonth() + 1, //月份
      "d+": t.getDate(), //日
      "h+": t.getHours(), //小时
      "m+": t.getMinutes(), //分
      "s+": t.getSeconds(), //秒
      "q+": Math.floor((t.getMonth() + 3) / 3), //季度
      "S": t.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
  },
  /**
   * 判断浏览器是否支持CSS3
   * @param style
   * @returns {boolean}
   */
  supportCss3 (style) {
    var prefix = ['webkit', 'Moz', 'ms', 'o'],
      i,
      humpString = [],
      htmlStyle = document.documentElement.style,
      _toHumb = function (string) {
        return string.replace(/-(\w)/g, function ($0, $1) {
          return $1.toUpperCase();
        });
      };

    for (i in prefix)
      humpString.push(_toHumb(prefix[i] + '-' + style));

    humpString.push(_toHumb(style));

    for (i in humpString)
      if (humpString[i] in htmlStyle) {
        // console.error(humpString[i]);
        return true;
      }

    return false;
  },
  /**
   * 浏览器信息
   * @returns {{trident, presto, webKit, gecko, mobile, ios, android, iPhone, iPad, webApp}|*}
   */
  browser(){
    var browser = {
      versions:function(){
        var u = navigator.userAgent, app = navigator.appVersion;
        return {//移动终端浏览器版本信息
          trident: u.indexOf('Trident') > -1, //IE内核
          presto: u.indexOf('Presto') > -1, //opera内核
          webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
          gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
          mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
          ios: !!u.match(/(i[^;]+;( U;)? CPU.+Mac OS X)/), //ios终端
          android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
          iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
          iPad: u.indexOf('iPad') > -1, //是否iPad
          webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
        };
      }(),
      language:(navigator.browserLanguage || navigator.language).toLowerCase()
    };

    return browser.versions;

    // if(browser.versions.mobile || browser.versions.ios || browser.versions.android ||
    //     browser.versions.iPhone || browser.versions.iPad){
    //     return true;
    // }else{
    //     return false;
    // };
  },

  init() {
    yx.config.domain = yx.setDomain();
  }
};
export default yx;
