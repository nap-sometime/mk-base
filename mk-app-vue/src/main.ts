import './set_public_path';
import singleSpa from 'single-spa-vue';
import Vue from 'vue';
import VueMeta from 'vue-meta';
import VueRouter from 'vue-router';

import app from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueMeta);

export const { bootstrap, mount, unmount } = singleSpa({
	Vue,
	appOptions: {
		router,
		render: (h: any) => h(app),
	},
});
