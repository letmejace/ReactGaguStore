import React from 'react'
import styled from 'styled-components'
import { Filters, ProductList, Sort, PageHero } from '../components'

// 상품 페이지
const ProductsPage = () => {
  return (
    <main>
      <PageHero title='products' />
      <Wrapper className='page'>
        <div className='section-center products'>
          {/* 필터 */}
          <Filters />
          <div>
            {/* 정렬 */}
            <Sort />
            {/* 상품 목록 */}
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`

export default ProductsPage