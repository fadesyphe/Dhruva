import { createRouter, createWebHashHistory } from 'vue-router';

import TheDiscover from './components/TheDiscover.vue';
import TheContact from './components/TheContact.vue';
import TheAbout from './components/TheAbout.vue';
import TheAuthorize from './components/TheAuthorize.vue';
import PageNotFound from './components/PageNotFound.vue';

export default createRouter({
	history: createWebHashHistory(),

	routes: [
		{ path: '/', component: TheDiscover, alias: '/' },
		{ path: '/contact', component: TheContact },
		{ path: '/about', component: TheAbout },
		{ path: '/authorize', component: TheAuthorize },
		{ path: '/:pathMatch(.*)*', component: PageNotFound },
	]
})