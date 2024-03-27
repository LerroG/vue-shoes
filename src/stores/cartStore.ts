import $api from '@/libs/axios';
import type { ICartItem } from '@/types/cart.types';
import type { IProduct } from '@/types/product.types';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useCartStore = defineStore('cartStore', () => {
	const cart = ref<ICartItem[]>([]);
	const isCartVisible = ref(false);

	const toggleCartVisible = () => {
		isCartVisible.value = !isCartVisible.value;
	};

	const cartItems = computed(() => {
		return cart.value.map((el) => el.product);
	});

	const cartTotalPrice = computed(() => {
		return cartItems.value.reduce((acc, el) => el.price + acc, 0);
	});

	const vatPrice = computed(() => Math.round((cartTotalPrice.value * 5) / 100));

	const toggleToCart = async (cartItem: IProduct) => {
		try {
			const isExistInCart = cartItems.value.some((el) => el.id === cartItem.id);

			if (isExistInCart) {
				const id = cart.value.find((el) => el.product.id === cartItem.id);
				await $api.delete(`/cart/${id?.id}`);
				getCart();
				return;
			}

			await $api.post('/cart?_relations=products', {
				product_id: cartItem.id,
			});
			getCart();
		} catch (error) {
			console.log(error);
		}
	};

	const getCart = async () => {
		try {
			const res = await $api.get<ICartItem[]>('/cart?_relations=products');

			cart.value = res.data;
		} catch (error) {
			console.log(error);
		}
	};
	return {
		cart,
		cartItems,
		cartTotalPrice,
		vatPrice,
		isCartVisible,
		toggleToCart,
		getCart,
		toggleCartVisible,
	};
});
