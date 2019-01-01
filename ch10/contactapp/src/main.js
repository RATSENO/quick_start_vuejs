// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//import App from './AppAxiosTest.vue'
import axios from 'axios';
require('es6-promise').polyfill();
//전역 수준에서 promise polyfill을 사용하기 위해 추가한다.
//폴리필(polyfill)은 웹 개발에서 기능을 지원하지 않는 웹 브라우저 상의 기능을 구현하는 코드를 뜻한다.

//Vue 인스턴스 내부에서 axios를 이용하기 위해 Vue.prototype에 axios를 추가하면
//더욱 간단하게 사용할 수 있다.
//이제 Vue인스턴스 내부에서는 axios를 import하지 않고도 this.$axios를 사용할 수 있다.
Vue.prototype.$axios = axios;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
})