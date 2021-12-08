import GlobalStyles from './GlobalStyles'
import styled from 'styled-components'
import { Route } from 'react-router-dom'

import PostList from '../pages/PostList'
import PostWrite from '../pages/PostWrite'
import PostDetail from '../pages/PostDetail'
import LikeList from '../pages/LikeList'
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
      </ConnectedRouter>
      <Footer/>
    </div>
    
  )
}

export default App;



