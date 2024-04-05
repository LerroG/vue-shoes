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
		class="grid grid-cols-autofit gap-5"
		v-auto-animate
	>
		<CardItem
			v-for="product in items"
			:key="product.id"
			:product="product"
		/>
	</div>
</template>
