import {
	createRouter,
	// createWebHashHistory
	createWebHistory
} from 'vue-router';
// import nprogress from '@/utils/nprogress'
import nprogress from 'nprogress'
import { useRouteTabStore } from "@/store/routeTab";
import routes from './routes.js';

const NProgress = nprogress.configure({
	easing: 'ease', // 动画方式
	speed: 1000, // 递增进度条的速度
	showSpinner: false, // 是否显示加载ico
	trickleSpeed: 200, // 自动递增间隔
	minimum: 0.3, // 更改启动时使用的最小百分比
	parent: 'html', //指定进度条的父容器
	showSpinner: true, // 右上角旋转的
})

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
	NProgress.start()
	const { addRouteTab } = useRouteTabStore()
	addRouteTab(to)
	next();
});
router.afterEach(() => {
	// document.title = `hxb-admin-vite`;
	NProgress.done()
});

export default router;
