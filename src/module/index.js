import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '../page/App.vue';
import routes from '../page/routes.js';

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes: routes
});

new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app');
