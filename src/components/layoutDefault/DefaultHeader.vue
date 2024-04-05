<script setup lang="ts">
	import { useAuthStore } from '@/stores/authStore';
	import { useCartStore } from '@/stores/cartStore';

	const cartStore = useCartStore();
	const authStore = useAuthStore();
</script>

<template>
	<header
		class="flex justify-between border-b border-slate-200 px-10 py-8 max-lg:p-5"
	>
		<RouterLink to="/">
			<div class="flex items-center gap-4">
				<img
					src="/logo.png"
					alt="Logo"
					class="w-10 max-md:w-12"
				/>
				<div class="max-md:hidden">
					<h2 class="text-xl font-bold uppercase">Vue Shoes</h2>
					<p class="text-slate-400 max-lg:hidden">Магазин лучшей обуви</p>
				</div>
			</div>
		</RouterLink>

		<ul class="flex items-center gap-4 md:gap-10">
			<li
				@click="cartStore.toggleCartVisible"
				class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black"
			>
				<img
					src="/cart.svg"
					alt="Cart"
					class="w-7"
				/>
				<b class="max-sm:hidden">{{ cartStore.cartTotalPrice }} руб.</b>
			</li>

			<RouterLink to="/favorites">
				<li
					class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black"
				>
					<img
						src="/heart.svg"
						alt="Cart"
						class="w-7"
					/>
					<span class="max-sm:hidden">Закладки</span>
				</li>
			</RouterLink>

			<li class="cursor-pointer text-gray-500 hover:text-black">
				<button
					@click="authStore.logout()"
					v-if="authStore.isAuth"
					class="flex items-center gap-3"
				>
					<img
						src="/logout.svg"
						alt="Profile"
						class="w-7"
					/>
					<span class="max-sm:hidden">Выйти</span>
				</button>
				<RouterLink
					to="/auth"
					v-else
				>
					<button class="flex items-center gap-3">
						<img
							src="/profile.svg"
							alt="Profile"
							class="w-7"
						/><span class="max-sm:hidden">Войти</span>
					</button>
				</RouterLink>
			</li>
		</ul>
	</header>
</template>
