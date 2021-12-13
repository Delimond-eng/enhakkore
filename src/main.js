import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router/index'
import storeData from './store/store.js'
import axios from 'axios';
Vue.config.productionTip = false;

Vue.filter('sortlength', function(text, length, suffix) {
    var sorted = (text.length > length) ? text.substring(0, length) + suffix : text
    return sorted;
});
Vue.use(Vuex);

//axios instance
var instance = axios.create({
    baseURL: 'http://enhakkore.rtgroup-rdc.com',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
});
Vue.prototype.$axios = instance;

//support vueSweetalert
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);

Vue.config.productionTip = false;
Vue.component('siteTitle', require('@/components/widgets/site_title').default);
Vue.component('siteParallax', require('@/components/widgets/parallax_widget').default);
Vue.component('pageBanner', require('@/components/widgets/banner_widget').default);
Vue.component('XFooter', require('@/components/layouts/footer').default);
Vue.component('XLoading', require('@/components/utilities/loading').default);
Vue.component('loginBox', require('@/components/utilities/login_modal').default);
const store = new Vuex.Store(storeData);

new Vue({
    router,
    store,
    render: h => h(App),


}).$mount('#app');