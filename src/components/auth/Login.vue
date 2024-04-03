<script setup lang="ts">
	import { useAuthStore } from '@/stores/authStore';
import { reactive, ref } from 'vue';
	import { z } from 'zod';

	const authStore = useAuthStore()

	const formData = reactive({
		username: '',
		password: '',
	});

	// validation rules start
	const formSchema = z.object({
		username: z
			.string()
			.min(3, { message: 'Имя должно содержать 3 и более символов' })
			.max(50, { message: 'Имя не должно содержать более 50 символов' }),
		password: z
			.string()
			.min(6, { message: 'Пароль должен содержать 6 и более символов' }),
	});

	type formSchema = z.infer<typeof formSchema>;
	const errors = ref<z.ZodFormattedError<formSchema> | null>(null);
	// validation rules end

	const handleSubmit = () => {
		const valid = formSchema.safeParse(formData);

		if (!valid.success) {
			errors.value = valid.error.format();
		} else {
			errors.value = null;
			authStore.login({
				username: formData.username,
				password: formData.password,
			});
		}
	};
</script>

<template>
	<div class="flex flex-col items-center gap-4">
		<form class="flex flex-col items-center gap-4 w-full">
			<div class="w-4/5">
				<input
					v-model="formData.username"
					class="border rounded-md p-2 outline-none focus:border-gray-400 w-full"
					type="text"
					placeholder="Имя пользователя"
				/>
				<template v-if="errors?.username">
					<small
						class="text-red-700"
						v-for="error in errors?.username?._errors"
					>
						{{ error }}</small
					>
				</template>
			</div>
			<div class="w-4/5">
				<input
					v-model="formData.password"
					class="border rounded-md p-2 outline-none focus:border-gray-400 w-full"
					type="text"
					placeholder="Пароль"
				/>
				<template v-if="errors?.password">
					<small
						class="text-red-700"
						v-for="error in errors?.password?._errors"
					>
						{{ error }}</small
					>
				</template>
			</div>
		</form>
		<div class="flex w-2/5 gap-3">
			<button
				@click="handleSubmit"
				class="transition bg-lime-500 w-full rounded-xl py-3 text-white disabled:bg-slate-300 hover:bg-lime-600 active:bg-lime-700"
			>
				Войти
			</button>
		</div>
	</div>
</template>
