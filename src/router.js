import { createRouter, createWebHashHistory } from 'vue-router';

import TheIndexOne from './components/TheIndexOne.vue';
import TheIndexTwo from './components/TheIndexTwo.vue';
import TheIndexThree from './components/TheIndexThree.vue';
import TheAuthorize from './components/TheAuthorize'

export default createRouter({
	history: createWebHashHistory(),

	routes: [
		{ path: '/one', component: TheIndexOne, alias: '/' },
		{ path: '/two', component: TheIndexTwo },
		{ path: '/three', component: TheIndexThree },
		{ path: '/authorize', component: TheAuthorize },
	]
})