import { axiosJsInstance } from './axiosRef';

export const getPosts = async (endpoint: string) => {
	return axiosJsInstance.get(endpoint);
};
