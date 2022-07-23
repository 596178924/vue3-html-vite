import axios from 'axios'
const baseURL = ``

const service = axios.create({
	baseURL: baseURL,
	timeout: 5000, // request timeout
	headers:{
		"Content-Type":"application/json",
	},
	paramsSerializer: function(params) {
		let result = [];
		for (let field in params) {
			if (params[field] === undefined) {
				result.push(`${field}=`);
				continue;
			}
			if (Array.isArray(params[field])) {
				result.push(params[field].map(item => `${field}=${item}`).join("&"));
			} else {
				result.push(`${field}=${params[field]}`);
			}
		}
		return result.join("&");
	}
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
		console.log(response)
		return response.data;
	},
	error => {
		return error.response.data
	}
)

export default service
