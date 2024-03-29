import React from 'react'
import { useProductsContext } from '../context/products_context'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Error from './Error'
import Loading from './Loading'
import Product from './Product'

// main화면 feature파트
const FeaturedProducts = () => {
  const {
    product_loading: Loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext()
  if (Loading) {
    return <Loading />
  } 
  if (error) {
    return <Error />
  }
  return (
    <Wrapper className='section'>
      <div className="title">
        <h2>특가상품</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        {/* 3개까지 표시 (slice사용) */}
        {featured.slice(0,3).map((product) => {
          return <Product key={product.id}  {...product}/>
        })}
      </div>
      <Link to="/products" className='btn'>
        모든상품 보기
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`

export default FeaturedProducts
