import GlobalStyles from './GlobalStyles'
import styled from 'styled-components'
import { Route, useLocation } from 'react-router'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { actionCreators as userActions } from '../redux/modules/user'


import PostList from '../pages/PostList'
import PostWrite from '../pages/PostWrite'
import PostDetail from '../pages/PostDetail'
import MyPost from '../pages/MyPost'
import MyFavorites from '../pages/MyFavorites'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Header from '../components/Header'
import Footer from '../components/Footer' 
import SearchResult from '../pages/SearchResult'


const showHeaderFooter = ({pathname}) => {
  if (pathname === '/login' || pathname === '/signup' || pathname === '/write') {
    return false
  } else {
    return true
  }
}

function App() {
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {

    // 현재 로그인 상태를 스토어에서 가져옴
    dispatch(userActions.getUser())
  }, [])

  return (
    <>
      {
        showHeaderFooter(location) && (<><Header/><Footer/></>)
      }
      <GlobalStyles/>
        <Route path="/" component={PostList} exact/>
        <Route path="/login" component={Login} exact />
        <Route path="/signup" component={Signup} exact />
        <Route path="/write" component={PostWrite} exact />
        <Route path="/detail" component={PostDetail} exact />
        <Route path="/user/posts/:user_id" component={MyPost} exact />
        <Route path="/user/favorites/:user_id" component={MyFavorites} exact />
        <Route path="/search/:keyword" component={SearchResult} exact />
    </>
  )
}

export default App



