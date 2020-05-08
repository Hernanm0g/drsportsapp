import devtools from '@vue/devtools'
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';


import VueRouter from 'vue-router'
Vue.use(VueRouter)
import routes from "./routes";
const router = new VueRouter({
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
});

import Vuex from 'vuex'
Vue.use(Vuex)
import store from "./store";

Vue.config.productionTip = false
Vue.config.devtools = true

function onDeviceReady(){
  if (process.env.NODE_ENV === 'development' && process.env.VUE_APP_DEVTOOLS_URL) {
    devtools.connect(process.env.VUE_APP_DEVTOOLS_URL, 8089)
  }

  new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
  }).$mount('app')
}
console.log("Triggering deviceready");
document.addEventListener("deviceready", onDeviceReady, false);
