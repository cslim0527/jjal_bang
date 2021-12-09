import { getCookie, setCookie, deleteCookie } from '../../shared/Cookie'
import { createAction, handleActions } from 'redux-actions'
import { produce } from 'immer'

const SET_USER = 'SET_USER'
const GET_USER = 'GET_USER'

const initialState = {
  user: null,
  is_login: false
}

const getUser = createAction(GET_USER, () => ({}))
const setUser = createAction(SET_USER, (user) => ({user}))

// middlewares
const loginAction = (user) => {
  return (dispatch, getState, { history }) => {
    const login_data = `__jjal-id=${user.userId}__jjal-token=${user.token}`
    setCookie('jjal_login', login_data)
    dispatch(setUser(user))
    history.push('/')
  }
}

// reducer
export default handleActions({
  [SET_USER]: (state, action) => produce(state, (draft) => {
    draft.user = action.payload.userId
    draft.is_login = true
  }),

  [GET_USER]: (state, action) => produce(state, (draft) => {
    const user_id = getCookie('id')
    draft.user = user_id ? user_id : null
    draft.is_login = user_id ? true : false
  })

}, initialState)

const actionCreators = {
  getUser,
  loginAction
}

export { actionCreators }