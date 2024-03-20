<script setup lang="ts">
	import DefaultHeader from '@/components/layoutDefault/DefaultHeader.vue';
</script>

<template>
	<div>
		<DefaultHeader />
		<main>
			<slot />
		</main>
	</div>
</template>
