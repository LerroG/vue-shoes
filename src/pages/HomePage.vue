<script setup lang="ts">
	import CardList from '@/components/CardList.vue';
	import { useProductStore } from '@/stores/productsStore';

	const productStore = useProductStore();
	productStore.getProducts()

</script>

<template>
	<div class="flex justify-between items-center">
		<h2 class="text-3xl font-bold mb-8">Вся обувь</h2>

		<div class="flex gap-4">
			<select class="py-2 px-3 border rounded-md outline-none">
				<option value="name">По названию</option>
				<option value="price">По цене (дешевые)</option>
				<option value="-price">По цене (дорогие)</option>
			</select>

			<div class="relative">
				<img
					class="absolute left-4 top-3"
					src="/search.svg"
				/>
				<input
					class="border rounded-md py-2 pl-11 pr-4 outline-none focus:border-gray-400"
					type="text"
					placeholder="Поиск..."
				/>
			</div>
		</div>
	</div>

	<div class="mt-10">
		<CardList />
	</div>
</template>
