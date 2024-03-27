<script setup lang="ts">
	import DefaultHeader from '@/components/layoutDefault/DefaultHeader.vue';
	import CartWrapper from '@/components/cart/CartWrapper.vue';
	import { useFavoriteStore } from '@/stores/favoriteStore';
	import { useCartStore } from '@/stores/cartStore';

	const cartStore = useCartStore();
	// cartStore.getCart();
	const favoriteStore = useFavoriteStore();
	// favoriteStore.getFavorites();
</script>

<template>
	<CartWrapper />
	<div class="bg-white w-4/5 m-auto rounded-xl shadow-xl mt-14">
		<DefaultHeader />
		<main>
			<slot />
		</main>
	</div>
</template>
