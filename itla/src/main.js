import Vue from 'vue'
import ElementUI from 'element-ui'; // import element-ui
import 'element-ui/lib/theme-chalk/index.css'; // import element-ui (CSS)

import router from './router/index'
import App from './App.vue'

Vue.config.productionTip = false;

Vue.use(ElementUI); // Element UI 전역 등록

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
