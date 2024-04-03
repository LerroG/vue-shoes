<script setup lang="ts">
	import { useAuthStore } from '@/stores/authStore';
	import { useCartStore } from '@/stores/cartStore';

	const cartStore = useCartStore();
	const authStore = useAuthStore();
</script>

<template>
	<header class="flex justify-between border-b border-slate-200 px-10 py-8">
		<RouterLink to="/">
			<div class="flex items-center gap-4">
				<img
					src="/logo.png"
					alt="Logo"
					class="w-10"
				/>
				<div>
					<h2 class="text-xl font-bold uppercase">Vue Shoes</h2>
					<p class="text-slate-400">Магазин лучшей обуви</p>
				</div>
			</div>
		</RouterLink>

		<ul class="flex items-center gap-10">
			<li
				@click="cartStore.toggleCartVisible"
				class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black"
			>
				<img
					src="/cart.svg"
					alt="Cart"
				/>
				<b>{{ cartStore.cartTotalPrice }} руб.</b>
			</li>

			<RouterLink to="/favorites">
				<li
					class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black"
				>
					<img
						src="/heart.svg"
						alt="Cart"
					/>
					<span>Закладки</span>
				</li>
			</RouterLink>

			<li
				class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black"
			>
				<img
					src="/profile.svg"
					alt="Cart"
				/>
				<button
					@click="authStore.logout()"
					v-if="authStore.isAuth"
				>
					Выйти
				</button>
				<RouterLink
					to="/auth"
					v-else
				>
					<button>Войти</button>
				</RouterLink>
			</li>
		</ul>
	</header>
</template>
