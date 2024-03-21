import $api from '@/libs/axios';
import type { IProduct } from '@/types/product.types';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useProductStore = defineStore('productStore', () => {
	const products = ref<IProduct[]>([]);

	const getProducts = async () => {
		try {
			const res = await $api.get<IProduct[]>('/products');

			products.value = res.data;
		} catch (error) {
			console.log(error);
		}
	};

	return {
		products,
		getProducts,
	};
});
