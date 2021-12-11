import { getCookie, setCookie, deleteCookie } from '../../shared/Cookie'
import { createAction, handleActions } from 'redux-actions'
import { produce } from 'immer'

const SET_USER = 'SET_USER'
const GET_USER = 'GET_USER'
const LOG_OUT = 'LOG_OUT'

const initialState = {
  user: null,
  is_login: false
}

const getUser = createAction(GET_USER, () => ({}))
const setUser = createAction(SET_USER, (user) => ({user}))
const logout = createAction(LOG_OUT, () => ({}))

// middlewares
const loginAction = (user) => {
  return (dispatch, getState, { history }) => {
    const login_data = `__jjal-id=${user.userId}__jjal-token=${user.token}`
    setCookie('jjal_login', login_data)
    dispatch(setUser(user))
    history.push('/')
  }
}

const logoutAction = () => {
  return (dispatch, getState, { history }) => {
    deleteCookie('jjal_login')
    dispatch(logout())
    window.location.href = '/'
  }
}

// reducer
export default handleActions({
  [SET_USER]: (state, action) => produce(state, (draft) => {
    console.log('[SET_USER]', action.payload.userId)
    draft.user = action.payload.user.userId
    draft.is_login = true
  }),

  [GET_USER]: (state, action) => produce(state, (draft) => {
    const user_id = getCookie('id')
    draft.user = user_id ? user_id : null
    draft.is_login = user_id ? true : false
  }),

  [LOG_OUT]: (state, action) => produce(state, (draft) => {
    draft.user = null
    draft.is_login = false
    sessionStorage.removeItem('recent_list')
  })

}, initialState)

const actionCreators = {
  getUser,
  loginAction,
  logoutAction
}

export { actionCreators }