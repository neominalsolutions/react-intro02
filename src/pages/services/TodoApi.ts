import { axiosJsInstance } from './axiosRef';

export const getTodos = async (endpoint: string) => {
	return axiosJsInstance.get(endpoint);
};
