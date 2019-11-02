// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/css/normalize.css';
import '~/assets/css/fullpage.css';
import '~/assets/css/slick.css';
import '~/assets/css/jquery.modal.min.css';
import '~/assets/css/style.css';

import '~/assets/js/jquery-ui.min.js';

import Vue from 'vue';
window.Vue = Vue;
import VueFullPage from 'vue-fullpage.js';

Vue.use(VueFullPage);

export default function (Vue, { router, head, isClient }) {
  head.title = '0707 Agency';
  head.titleTemplate = '%s - 0707 Agency';
  Vue.component('Layout', DefaultLayout)
}
