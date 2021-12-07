import GlobalStyles from './GlobalStyles'
import styled from 'styled-components'
import { Route } from 'react-router-dom'

import PostList from '../pages/PostList'
import PostWrite from '../pages/PostWrite'
import PostDetail from '../pages/PostDetail'
import LikeList from '../pages/LikeList'
import Login from '../pages/Login'
import Signup from '../pages/Signup'

function App() {

  return (
    <div className="App">
      <GlobalStyles/>
      <Route path="/" component={PostList} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/signup" component={Signup} exact />
      <Route path="/write" component={PostWrite} exact />
    </div>
  )
}

export default App;



