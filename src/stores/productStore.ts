import $api from '@/libs/axios';
import type { IProduct, ISearchAndSort } from '@/types/product.types';
import { defineStore } from 'pinia';
import { reactive, ref, watch } from 'vue';

export const useProductStore = defineStore('productStore', () => {
	const products = ref<IProduct[]>([]);
	const filters = reactive({ sortBy: 'title', searchQuery: '' });

	const getProducts = async () => {
		try {
			const params: ISearchAndSort = {
				sortBy: filters.sortBy,
			};

			if (filters.searchQuery) {
				params.title = `*${filters.searchQuery}*`;
			}

			const res = await $api.get<IProduct[]>('/products', {
				params,
			});

			products.value = res.data;
		} catch (error) {
			console.log(error);
		}
	};

	watch(filters, getProducts);

	return {
		products,
		filters,
		getProducts,
	};
});
