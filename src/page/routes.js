/**
 * Created by defore on 2016/12/1.
 */
import Index from './index/index.vue';
import Test from './test/test.vue';
import Detail from './test/detail/detail.vue';
import Analysis from './test/analysis/analysis.vue';
/*
const routes = [{
  path: '/',
  component: Index
}, {
  path: '/test/',
  component: Test,
}, {
    path: '/test/detail',
    component: Detail
}, {
	path: '/test/analysis',
	component: Analysis
}];
*/

const routes = [{
  path: '/',
  component: Index
}, {
  path: '/test/list',
  component: Test,
}, {
	path: '/test/detail/:id',
	component: Detail
}, {
	path: '/test/analysis/:id',
	component: Analysis
}];

export default routes;

