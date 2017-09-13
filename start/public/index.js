import Vue from "vue";
//import Vuex from "vuex";
import VueRouter from "vue-router";
import page from "../page.vue";


//Vue.use(vuex);
Vue.use(VueRouter);


const router = new VueRouter( require ("./vue/router.config.js")() );


(new Vue ({
  "el": ".page",
  "router": router,
  "render": h => h(page)
}));
