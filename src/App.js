
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
        <Navbar />
        <Sidebar />
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
          {/* API목록 각각 하나씩 표시 */}
          <Route exact path='/products/:id' children=
          {<SingleProduct />} />
          <Route exact path='/checkout'>
            <Checkout />
          </Route>
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