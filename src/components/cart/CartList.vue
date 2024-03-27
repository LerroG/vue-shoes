<script setup lang="ts">
	import { useCartStore } from '@/stores/cartStore';
	import CartItem from './CartItem.vue';

	const cartStore = useCartStore();
</script>

<template>
	<div
		class="flex flex-col flex-1 gap-4 justify-between"
		v-auto-animate
	>
		<CartItem
			v-for="cartItem in cartStore.cartItems"
			:key="cartItem.id"
			:cartItem="cartItem"
		/>
	</div>
</template>
