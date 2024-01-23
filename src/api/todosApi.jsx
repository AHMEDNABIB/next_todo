import axios from "axios";

const todosApi = axios.create({
	baseURL: "https://localhost:5000",
});

export const todosUrlEndpoint = "/todos";

export const getTodos = async () => {
	await delay();
	const response = await todosApi.get(todosUrlEndpoint);
	return response.data;
};