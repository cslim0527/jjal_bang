import { createAction, handleActions } from 'redux-actions'
import { produce } from 'immer'
import { API } from '../../shared/api'
import { getCookie } from '../../shared/Cookie'

const GET_POST = 'GET_POST'
const ADD_BOOKMARK_CNT = 'ADD_BOOKMARK_CNT'

const initialState = {
  posts: [],
  page: 1,
  has_next: false
}

const getPosts = createAction(GET_POST, (post_data) => ({post_data}))
const changeLike = createAction(ADD_BOOKMARK_CNT, (_id) => ({_id}))

// middlewares
const getPostAction = (page) => {
  return async (dispatch, getState, { history }) => {
    const post_res = await API?.post.getPosts(page)
    let post_data = {
      ...post_res.data,
      page: page + 1,
    }

    const user_id = getCookie('id')
    if (user_id) {
      let like_res = await API.like.getList()
      // let like_arr = like_res.data
      // like_arr = like_arr.filter(post => post.userID === user_id)

      // if (like_arr.length) {
      //   like_arr.forEach(like_post => {
      //     const idx = post_data.posts.findIndex(post => post._id === like_post._id)
  
      //     if (idx > 0 && post_data.posts[idx]._id === like_post._id) {
      //       post_data.posts[idx]['like'] = true
      //     }
  
      //   })
      // }
    }
    dispatch(getPosts(post_data))
  }
}

const likeChangeAction = (_id) => {
  return async (dispatch, getState) => {
    const post_arr = getState().post.posts
    const idx = post_arr.findIndex(post => post._id === _id)
    const user_id = getCookie('id')

    if (!user_id) {
      alert('로그인 후 사용 할 수 있습니다.')
    }
    
    let like_info = {
      postId: _id,
      userId: user_id
    }

    if (post_arr[idx].like) {
      const res = await API.like.remove(like_info)
      console.log('라이크 해제', res)
    } else {
      const res = await API.like.add(like_info)
      console.log('라이크 추가', res)
    }
    
    dispatch(changeLike(_id))
  }
}

// reducer
export default handleActions({
  [GET_POST]: (state, action) => produce(state, (draft) => {
    draft.posts.push(...action.payload.post_data.posts) 
    draft.has_next = action.payload.post_data.next
    draft.page = action.payload.post_data.page
  }),

  [ADD_BOOKMARK_CNT]: (state, action) => produce(state, (draft) => {
    const idx = draft.posts.findIndex(post => post._id === action.payload._id)

    if (state.posts[idx].like) {
      draft.posts[idx].postLikeCnt -= 1
      draft.posts[idx].like = false
    } else {
      draft.posts[idx].postLikeCnt += 1
      draft.posts[idx].like = true
    }
  }),

}, initialState)

const actionCreators = {
  getPostAction,
  likeChangeAction
}

export { actionCreators }