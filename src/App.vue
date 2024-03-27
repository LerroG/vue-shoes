<script setup lang="ts">
	import { RouterView } from 'vue-router';
	import AppLayout from './layouts/AppLayout.vue';
</script>

<template>
	<AppLayout>
		<div class="p-8">
			<RouterView />
		</div>
	</AppLayout>
</template>

<style scoped></style>
