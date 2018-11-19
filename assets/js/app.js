// any CSS you require will output into a single css file (app.css in this case)
require('../css/app.css');
require('../css/mini-dark.min.css');

//VUE.js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './vuex/store'
require('./app.scss');
Vue.config.productionTip = false;
Vue.prototype.$http = axios;


new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App},
});

