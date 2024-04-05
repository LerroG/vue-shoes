<script setup lang="ts">
	import CardList from '@/components/cards/CardList.vue';
	import { useProductStore } from '@/stores/productStore';
	import debounce from 'lodash.debounce';

	const productStore = useProductStore();
	productStore.getProducts();

	const onChangeSearchInput = debounce((event: Event) => {
		productStore.filters.searchQuery = (event.target as HTMLInputElement).value;
	}, 500);

	const onChangeSelect = (event: Event) => {
		productStore.filters.sortBy = (event.target as HTMLInputElement).value;
	};

	const selectOptions = [
		{
			value: 'name',
			title: 'По названию',
		},
		{
			value: 'price',
			title: 'По цене (дешевые)',
		},
		{
			value: '-price',
			title: 'По цене (дорогие)',
		},
	];
</script>

<template>
	<div class="flex justify-between items-center max-md:flex-col max-md:gap-4">
		<div class="text-3xl font-bold mr-4">Вся обувь</div>

		<div class="flex gap-4 max-sm:flex-col-reverse">
			<select
				@change="onChangeSelect"
				class="py-2 px-3 border rounded-md outline-none hover:cursor-pointer"
			>
				<option
					v-for="option in selectOptions"
					:key="option.value"
					:value="option.value"
				>
					{{ option.title }}
				</option>
			</select>

			<div class="flex relative items-center">
				<img
					class="absolute left-4 top-3"
					src="/search.svg"
				/>
				<input
					@input="onChangeSearchInput"
					class="border rounded-md py-2 pl-11 pr-4 outline-none focus:border-gray-400"
					type="text"
					placeholder="Поиск..."
				/>
			</div>
		</div>
	</div>

	<div class="mt-10">
		<CardList
			:items="productStore.products"
			type="home"
		/>
	</div>
</template>
