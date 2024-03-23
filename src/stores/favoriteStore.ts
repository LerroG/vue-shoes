import $api from '@/libs/axios';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { IProduct } from '@/types/product.types';

export const useFavoriteStore = defineStore('favoriteStore', () => {
	const favorites = ref<{ id: number; product: IProduct }[]>([]);

	const favoriteProducts = computed(() => {
		return favorites.value.map((el) => el.product);
	});

	const toggleToFavorite = async (item: IProduct) => {
		try {
			const isFavorite = favoriteProducts.value.some((el) => el.id === item.id);

			if (isFavorite) {
				const id = favorites.value.find((el) => el.product.id === item.id);
				await $api.delete(`/favorites/${id?.id}`);
				getFavorites();
				return;
			}

			await $api.post('/favorites?_relations=products', {
				product_id: item.id,
			});
			getFavorites();
		} catch (error) {
			console.log(error);
		}
	};

	const getFavorites = async () => {
		try {
			const res = await $api.get('/favorites?_relations=products');

			// const items = res.data.map((el) => el.product);

			favorites.value = res.data;
			// console.log(favorites);
		} catch (error) {
			console.log(error);
		}
	};

	return {
		favorites,
		favoriteProducts,
		toggleToFavorite,
		getFavorites,
	};
});
