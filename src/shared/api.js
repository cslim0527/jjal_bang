import axios from "axios"
import { getCookie } from "./Cookie"

export const BASE_URL = 'http://13.209.85.96/'

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 3000,
  headers: {
		'content-type': 'application/json;charset=UTF-8',
		accept: 'application/json,',
	}
})

instance.interceptors.request.use((config) => {
	config.headers.common['authorization'] = `Bearer ${getCookie('token')}`
	return config
})

export const API = {
  users: {
    checkId: (id) => instance.post('/api/users/checkId', id),
    login: (login_info) => instance.post('/api/users/auth', login_info),
    signup: (signup_info) => instance.post('/api/users/users', signup_info)
  },

  post: {
    getPosts: (page = 1) => instance.post('/api/posts/lists', {page: page}),
    imageUpload: (img) => instance.post('/api/posts/uploadfile', img),
    postUpload: (post) => instance.post('/api/posts', post),
    getDetail: (post_id) => instance.post('/api/posts/details', post_id)
  },

  comment: {
    write: (comment) =>  instance.post('/api/comment/', comment),
    getList: (post_id) => instance.post('/api/comment/detail', post_id),
    delete: (comment_info) => instance.delete('/api/comment/detail', { data: comment_info }),
    update: (comment) =>  instance.post('/api/comment/detail', comment),
  },

  like: {
    getList: (user_id) => instance.post('/api/users/likeImg', user_id),
    add: (like_info) => instance.post('/api/like/likes', like_info),
    remove: (like_info) => instance.delete('/api/like/likes', { data: like_info }),
  }

}
