<script setup lang="ts">
	import CardList from '@/components/cards/CardList.vue';
	import { useFavoriteStore } from '@/stores/favoriteStore';

	const favoriteStore = useFavoriteStore();
</script>

<template>
	<h2 class="text-3xl font-bold mb-8">Мои закладки</h2>

	<CardList
		:items="favoriteStore.favoriteProducts"
		type="favorite"
	/>
</template>
