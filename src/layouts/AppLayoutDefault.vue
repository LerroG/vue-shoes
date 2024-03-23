<script setup lang="ts">
	import DefaultHeader from '@/components/layoutDefault/DefaultHeader.vue';
	import { useFavoriteStore } from '@/stores/favoriteStore';

	const favoriteStore = useFavoriteStore();
	favoriteStore.getFavorites();
</script>

<template>
	<div>
		<DefaultHeader />
		<main>
			<slot />
		</main>
	</div>
</template>
