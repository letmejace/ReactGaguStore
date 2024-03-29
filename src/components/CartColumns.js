import React from 'react'
import styled from 'styled-components'

const CartColumns = () => {
  return (
    <Wrapper>
      {/* cart 목록 */}
      <div className='content'>
        <h5>상품정보</h5>
        <h5>가격</h5>
        <h5>수량</h5>
        <h5>주문금액</h5>
        <span></span>
      </div>
      <hr />
    </Wrapper>
  )
}

// 화면 작아지면 사라지게
const Wrapper = styled.div`
  display: none;
  @media (min-width: 776px) {
    display: block;
    .content {
      display: grid;
      grid-template-columns: 316px 1fr 1fr 1fr auto;
      justify-items: center;
      column-gap: 1rem;
      h5 {
        color: var(--clr-grey-5);
        font-weight: 400;
      }
    }

    span {
      width: 2rem;
      height: 2rem;
    }
    hr {
      margin-top: 1rem;
      margin-bottom: 3rem;
    }
  }
`

export default CartColumns
