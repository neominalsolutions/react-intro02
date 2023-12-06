import axios from "axios";

export const axiosJsInstance = axios.create({
	timeout: 60 * 1000, // 1 minute.
	baseURL: 'https://jsonplaceholder.typicode.com',
});
