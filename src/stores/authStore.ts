import $api from '@/libs/axios';
import type { IUcer } from '@/types/user.types';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export const useAuthStore = defineStore('authStore', () => {
	const router = useRouter();

	const user = ref({});
	const isAuth = ref(false);

	const login = async (userData: IUcer) => {
		try {
			const res = await $api.post('/auth', userData);
			localStorage.setItem('token', res.data.token);
			isAuth.value = true;
			user.value = res.data.data;

			if (router.options.history.state.back) router.back();

			router.push('/');
		} catch (error) {
			console.log(error);
		}
	};

	const registration = async (userData: IUcer) => {
		try {
			const res = await $api.post('/register', userData);
			localStorage.setItem('token', res.data.token);
			isAuth.value = true;
			user.value = res.data.data;

			if (router.options.history.state.back) router.back();

			router.push('/');
		} catch (error) {
			console.log(error);
		}
	};

	const logout = () => {
		try {
			localStorage.removeItem('token');
			isAuth.value = false;
			user.value = {};
		} catch (error) {
			console.log(error);
		}
	};

	const checkAuth = async () => {
		try {
			const res = await $api.get('/auth_me');
			isAuth.value = true;
			user.value = res.data;
		} catch (error) {
			console.log(error);
		}
	};

	return {
		user,
		isAuth,
		login,
		registration,
		logout,
		checkAuth,
	};
});
