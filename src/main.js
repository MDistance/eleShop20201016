import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import router from './router'
import store from './store'
// import axios from "axios"
import { Tabbar, TabbarItem,NavBar,Lazyload } from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);
Vue.use(Lazyload);
Vue.config.productionTip = false
Vue.use(Lazyload, {
  lazyComponent: true,
});
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
