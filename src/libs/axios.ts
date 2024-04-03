import axios from 'axios';

const token = localStorage.getItem('token')

const $api = axios.create({
	withCredentials: true,
	baseURL: import.meta.env.VITE_BASE_URL,
});

$api.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${token}`;
	return config;
});

export default $api;
