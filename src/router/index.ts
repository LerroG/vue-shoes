import { createRouter, createWebHistory } from 'vue-router';
import { RouteNamesEnum } from './router.types';
import { loadLayoutMiddleware } from "@/router/middleware/loadLayout.middleware";

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
	],
});

router.beforeEach(loadLayoutMiddleware);

export default router;
