import { createRouter, createWebHistory } from 'vue-router';
import { RouteNamesEnum } from './router.types';
import { loadLayoutMiddleware } from '@/router/middleware/loadLayout.middleware';
import { AppLayoutsEnum } from '@/layouts/layouts.types';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: RouteNamesEnum.home,
			component: () => import('@/pages/HomePage.vue'),
		},
		{
			path: '/favorites',
			name: RouteNamesEnum.favorites,
			component: () => import('@/pages/FavoritesPage.vue'),
		},
		{
			path: '/auth',
			name: RouteNamesEnum.auth,
			component: () => import('@/pages/AuthPage.vue'),
			meta: {
				layout: AppLayoutsEnum.auth,
			},
		},
	],
});

router.beforeEach(loadLayoutMiddleware);
//  const history  = router.options.history

//  console.log(history)

export default router;
