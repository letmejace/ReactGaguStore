import React from 'react'
import styled from 'styled-components'
import { FaPlus, FaMinus } from 'react-icons/fa'

// 수량버튼
const AmountButtons = ({ increase, decrease, amount }) => {
  return (
    <Wrapper className='amount-btsn'>
      {/* 감소 */}
      <button type='button' className='amount-btn' onClick={decrease}>
        <FaMinus />
      </button>
      {/* 수량 표시 */}
      <h2 className='amount'>{amount}</h2>
      {/* 증가 */}
      <button type='button' className='amount-btn' onClick={increase}>
        <FaPlus />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  width: 140px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  h2 {
    margin-bottom: 0;
  }
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    margin-bottom: 0;
  }
`

export default AmountButtons
