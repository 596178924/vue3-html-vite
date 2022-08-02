import axios from 'axios'
import config from "@/config"
import { paramsSerializer } from "./tools"
const baseURL = `http://localhost:${config.serverPort}`

const service = axios.create({
	baseURL: baseURL,
	timeout: 5000, // request timeout
	headers: {
		"Content-Type": "application/json",
	},
	paramsSerializer: paramsSerializer,
})
// request interceptor
service.interceptors.request.use(
	config => {
		return config;
	},
	error => {
		return Promise.reject(error);
	}
)

// response interceptor
service.interceptors.response.use(
	response => {
		return response.data;
	},
	error => {
		return error.response.data
	}
)

export default service
