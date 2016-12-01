import Vue from 'vue';
// import VueRouter from 'vue-router';
import Index from '../../index/index.vue';
// import routes = from './routes.js';
// Vue.use(VueRouter);
// const router = new VueRouter({
//   mode: 'history',
//   routes: routes
// })

new Vue({
    // router: router,
    render: h => h(Index)
}).$mount('#app');
