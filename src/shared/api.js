import axios from "axios"

const instance = axios.create({
  baseURL: 'http://13.209.85.96',
  timeout: 2000,
  headers: {
		'content-type': 'application/json;charset=UTF-8',
		accept: 'application/json,',
	}
})

// instance.interceptors.request.use(
//   function (config) {
//     console.log('[intercepter 성공]', config)
//     return config;
//   },
//   function (error) {
//     console.log('[intercepter 실패]', error);
//     return Promise.reject(error);
//   }
// );

// API.defaults.headers.common['Authorization'] = AUTH_TOKEN

export const API = {
  users: {
    checkId: (id) => instance.post('/api/users/checkId', id),
    login: (login_info) => instance.post('/api/users/auth', login_info)
  },
  post: {
    imageUpload: (img) => instance.post('/api/posts/uploadfile', img),
    postUpload: (post) => instance.post('/api/posts', post)
  }
}
