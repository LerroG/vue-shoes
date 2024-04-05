<script setup lang="ts">
	import CartHeader from './CartHeader.vue';
	import CartEmpty from './CartEmpty.vue';
	import CartList from './CartList.vue';
	import { useCartStore } from '@/stores/cartStore';

	const cartStore = useCartStore();
</script>

<template>
	<Transition name="cartbg">
		<div
			v-if="cartStore.isCartVisible"
			class="fixed top-0 left-0 h-full w-full bg-black z-30 opacity-70"
		></div>
	</Transition>
	<Transition name="cart">
		<div
			v-if="cartStore.isCartVisible"
			class="bg-white max-sm:w-full w-96 h-full fixed right-0 top-0 z-40 p-8"
		>
			<CartHeader />

			<div
				v-if="!cartStore.cartItems.length"
				class="flex h-full items-center"
			>
				<CartEmpty />
			</div>

			<div v-else>
				<CartList />

				<div class="flex flex-col gap-4 mt-7">
					<div class="flex gap-2">
						<span>Итого:</span>
						<div class="flex-1 border-b border-dashed"></div>
						<b>{{ cartStore.cartTotalPrice }} ₽</b>
					</div>

					<div class="flex gap-2">
						<span>Налог 5%:</span>
						<div class="flex-1 border-b border-dashed"></div>
						<b>{{ cartStore.vatPrice }} ₽</b>
					</div>

					<button
						class="mt-4 transition bg-lime-500 w-full rounded-xl py-3 text-white disabled:bg-slate-300 hover:bg-lime-600 active:bg-lime-700 cursor-pointer"
					>
						Оформить заказ
					</button>
				</div>
			</div>
		</div>
	</Transition>
</template>

<style scoped>
	.cart-enter-active,
	.cart-leave-active {
		@apply transition-all duration-300 ease-out;
	}

	.cart-enter-from,
	.cart-leave-to {
		@apply translate-x-full;
	}

	.cartbg-enter-active,
	.cartbg-leave-active {
		@apply transition-all duration-300 ease-out;
	}

	.cartbg-enter-from,
	.cartbg-leave-to {
		@apply opacity-0;
	}
</style>
