
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'

// index.js파일에 모두 담에 한번에 import 
import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  PrivateRoute,
  // AuthWrapper,
} from './pages'

function App() {
  return (
    // <AuthWrapper>
      <Router>
        {/* Nav, SideBar모두 적용 */}
        <Navbar />
        <Sidebar />
        {/* Switch로 페이지별로 분리 */}
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/cart'>
            <Cart />
          </Route>
          <Route exact path='/products'>
            <Products />
          </Route>
          {/* API목록 id별로 표시 */}
          <Route exact path='/products/:id' children=
          {<SingleProduct />} />
          <PrivateRoute exact path='/checkout'>
            <Checkout />
          </PrivateRoute>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    // </AuthWrapper>
  )
}

export default App