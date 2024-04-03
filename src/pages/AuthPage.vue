<script setup lang="ts">
	import Register from '@/components/auth/Register.vue';
	import Login from '@/components/auth/Login.vue';
	import { shallowRef } from 'vue';

	const activeComponent = shallowRef(Login);
</script>

<template>
	<div class="bg-white rounded-xl shadow-xl px-6 pb-6 pt-1 w-1/3">
		<div class="flex justify-center gap-2 mb-7">
			<div class="form_radio_btn">
				<input
					id="radio-2"
					name="radio"
					type="radio"
					v-model="activeComponent"
					:value="Login"
				/>
				<label for="radio-2"> Войти </label>
			</div>
			<div class="form_radio_btn">
				<input
					id="radio-1"
					name="radio"
					type="radio"
					v-model="activeComponent"
					:value="Register"
				/>
				<label for="radio-1"> Регистрация </label>
			</div>
		</div>
		<div>
			<Transition mode="out-in">
				<component :is="activeComponent"></component>
			</Transition>
		</div>
	</div>
</template>

<style scoped>
	.form_radio_btn {
		@apply flex justify-center transition duration-200 w-1/2;
	}
	.form_radio_btn input[type='radio'] {
		@apply hidden;
	}

	.form_radio_btn label {
		@apply flex justify-center py-3 cursor-pointer select-none w-full;
	}

	/* Checked */
	.form_radio_btn input[type='radio']:checked + label {
		@apply border-b-2 border-lime-700;
	}

	/* Hover */
	.form_radio_btn label:hover {
		@apply bg-gray-200;
	}
	.v-enter-active,
	.v-leave-active {
		@apply transition-all duration-300 ease-out;
	}

	.v-enter-from {
		@apply opacity-0 translate-x-10;
	}

	.v-leave-to {
		@apply opacity-0 -translate-x-10;
	}
</style>
