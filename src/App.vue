<script setup lang="ts">
	import { RouterView } from 'vue-router';
	import AppLayout from './layouts/AppLayout.vue';
</script>

<template>
	<AppLayout class="bg-white w-4/5 m-auto rounded-xl shadow-xl mt-14">
		<div class="p-8">
			<RouterView />
		</div>
	</AppLayout>
</template>

<style scoped></style>
