<script setup lang="ts">
	import CardItem from './CardItem.vue';
	import { useProductStore } from '@/stores/productsStore';

	const productStore = useProductStore();
</script>

<template>
	<div
		class="grid grid-cols-4 gap-5"
		v-auto-animate
	>
		<CardItem
			v-for="product in productStore.products"
			:key="product.id"
      :product="product"
		/>
	</div>
</template>
