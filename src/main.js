// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import VueResource from 'vue-resource'
import VeeValidate from 'vee-validate'
import App from './App'
import messagesAr from './assets/zh_CN';
import attributesAr from './assets/zh_CN';
import attributesEn from './assets/en.js';
// Pass options to make all validators use the arabic language, also merge the english and arabic attributes with the internal dictionary.
Vue.use(VeeValidate, {
  locale: 'zh_CN',
  dictionary: {
    en: { attributes: attributesEn },
    zh_CN: { messages: messagesAr, attributes: attributesAr }
  }
});
Vue.use(VueResource);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  VueResource,
  VeeValidate,
  template: '<App/>',
  components: { App }
})
