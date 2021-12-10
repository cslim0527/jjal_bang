import { createAction, handleActions } from 'redux-actions'
import { produce } from 'immer'
import { API } from '../../shared/api'

const GET_POST = 'GET_POST'
const ADD_BOOKMARK_CNT = 'ADD_BOOKMARK_CNT'

const initialState = {
  posts: [],
  page: 1,
  has_next: false
}

const getPosts = createAction(GET_POST, (post_data) => ({post_data}))
const addBookMarkCnt = createAction(ADD_BOOKMARK_CNT, (_id) => ({_id}))

// middlewares
const getPostAction = (page) => {
  return async (dispatch, getState, { history }) => {
    const res = await API?.post.getPosts(page)
    const post_data = {
      ...res.data,
      page: page + 1
    }
    dispatch(getPosts(post_data))
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
    draft.posts[idx].postLikeCnt += 1
  }),

}, initialState)

const actionCreators = {
  getPostAction,
  addBookMarkCnt
}

export { actionCreators }