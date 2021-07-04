import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'
// dev-857nzob3.us.auth0.com
// xDH31nObcrJKh0xoW6U5MuLE90GKAe2b

ReactDOM.render(
  // Provider로 App감싸기
  <Auth0Provider
    domain='dev-857nzob3.us.auth0.com'
    clientId='xDH31nObcrJKh0xoW6U5MuLE90GKAe2b'
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,

  document.getElementById('root')
)
