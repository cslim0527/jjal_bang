import GlobalStyles from './GlobalStyles'
import styled from 'styled-components'
import { Route } from 'react-router-dom'

import PostList from '../pages/PostList'
import PostWrite from '../pages/PostWrite'
import PostDetail from '../pages/PostDetail'
import MyPost from '../pages/MyPost'
import MyFavorites from '../pages/MyFavorites'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Header from '../components/Header'
import Footer from '../components/Footer' 
import { ConnectedRouter } from 'connected-react-router' 
import { history } from '../redux/configureStore'

function App() {
  console.log(history)
  return (
  
    <div className="App">
      <Header/>
        <GlobalStyles/>
        <ConnectedRouter history={history}>
        <Route path="/" component={PostList} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/signup" component={Signup} exact />
        <Route path="/write" component={PostWrite} exact />
        <Route path="/detail" component={PostDetail} exact />
        <Route path="/user/posts/:user_id" component={MyPost} exact />
        <Route path="/user/favorites/:user_id" component={MyFavorites} exact />
        </ConnectedRouter>
      <Footer/>
    </div>
    
  )
}

export default App



