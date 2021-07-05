import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'
import { Link } from 'react-router-dom'

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext()
  const { myUser, loginWithRedirect } = useUserContext()

  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            주문금액 : <span>￦{(total_amount+(39001)).toLocaleString('ko-KR')}</span>
          </h5>
          <p>
            배송비 : <span>￦{(shipping_fee).toLocaleString('ko-KR')}</span>
          </p>
          <hr />
          <h4>
            총 주문금액 :{' '}
            <span>￦{((total_amount+(39001)) + shipping_fee).toLocaleString('ko-KR')}</span>
          </h4>
        </article>
        {myUser ? (
          <Link to='/checkout' className='btn'>
            proceed to checkout
          </Link>
        ) : (
          <button type='button' className='btn' onClick={loginWithRedirect}>
            구매하기
          </button>
        )}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`

export default CartTotals
