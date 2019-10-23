import Vue from 'vue'
import ElementUI from 'element-ui'; // import element-ui
import 'element-ui/lib/theme-chalk/index.css'; // import element-ui (CSS)
import App from './App.vue'
import router from './router/index'
import store from './store/index'

Vue.config.productionTip = false;

Vue.use(ElementUI); // Element UI 전역 등록

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
