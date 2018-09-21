import '@babel/polyfill';
import Vue from 'vue';
import './plugins/vuetify'
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

// Helpers
// import colors from 'vuetify/es5/util/colors';

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
