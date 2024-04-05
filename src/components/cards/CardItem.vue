<script setup lang="ts">
	import type { IProduct } from '@/types/product.types';
	import { useFavoriteStore } from '@/stores/favoriteStore';
	import { computed } from 'vue';
	import { useCartStore } from '@/stores/cartStore';

	const favoriteStore = useFavoriteStore();
	const cartStore = useCartStore();

	const props = defineProps<{
		product: IProduct;
	}>();

	const isFavorite = computed(() => {
		return favoriteStore.favoriteProducts.some(
			(el) => el.id === props.product.id
		);
	});

	const isExistInCart = computed(() => {
		return cartStore.cartItems.some((el) => el.id === props.product.id);
	});

	const onClickFavorite = () => {
		favoriteStore.toggleToFavorite(props.product);
	};

	const onClickToggleToCart = () => {
		cartStore.toggleToCart(props.product);
	};
</script>

<template>
	<div
		class="relative bg-white border border-slate-100 rounded-3xl p-6 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl"
	>
		<img
			:src="!isFavorite ? '/like-1.svg' : '/like-2.svg'"
			alt="Like"
			class="absolute top-6 left-6"
			@click="onClickFavorite"
		/>
		<div class="flex justify-center h-3/5">
			<img
				:src="product.imageUrl"
				:alt="product.title"
			/>
		</div>

		<div class="flex flex-col justify-between mt-4 h-2/5">
			<div>{{ product.title }}</div>

			<div class="flex justify-between mb-4">
				<div class="flex flex-col">
					<span class="text-slate-400">Цена:</span>
					<b>{{ product.price }} руб.</b>
				</div>

				<img
					@click="onClickToggleToCart"
					:src="!isExistInCart ? '/plus.svg' : '/checked.svg'"
					alt="Plus"
				/>
			</div>
		</div>
	</div>
</template>
