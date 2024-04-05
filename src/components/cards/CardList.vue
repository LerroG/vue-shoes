<script setup lang="ts">
	import type { IProduct } from '@/types/product.types';
	import CardItem from './CardItem.vue';

	defineProps<{
		items: IProduct[];
		type: 'home' | 'favorite';
	}>();
</script>

<template>
	<div
		class="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5"
		v-auto-animate
	>
		<CardItem
			v-for="product in items"
			:key="product.id"
			:product="product"
		/>
	</div>
</template>
