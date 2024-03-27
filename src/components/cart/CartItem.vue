<script setup lang="ts">
	import { useCartStore } from '@/stores/cartStore';
	import type { IProduct } from '@/types/product.types';

	const props = defineProps<{ cartItem: IProduct }>();

	const cartStore = useCartStore();

	const onClickToggleToCart = () => {
		cartStore.toggleToCart(props.cartItem);
	};
</script>

<template>
	<div class="flex items-center border border-slate-200 p-4 rounded-xl gap-4">
		<img
			:src="cartItem.imageUrl"
			:alt="cartItem.title"
			class="w-16 h-16"
		/>

		<div class="flex flex-col flex-1">
			<p>{{ cartItem.title }}</p>

			<div class="flex justify-between mt-2">
				<b class="flex-1">{{ cartItem.price }} руб.</b>
				<img
					@click="onClickToggleToCart"
					class="opacity-40 hover:opacity-100 cursor-pointer transition"
					src="/close.svg"
				/>
			</div>
		</div>
	</div>
</template>
