import {
	createRouter,
	// createWebHashHistory
	createWebHistory
} from 'vue-router';
import nprogress from '@/utils/nprogress'

import routes from './routes.js';

const router = createRouter({
	routes,
	// history: createWebHashHistory(),
	history: createWebHistory(),
	scrollBehavior: () => ({
		top: 0,
		left: 0,
		behavior: 'smooth',
	}),
});
router.beforeEach(async (to, from, next) => {
	nprogress.start()
	next();
});
router.afterEach(() => {
	// document.title = `hxb-admin-vite`;
	nprogress.done()
});

export default router;
