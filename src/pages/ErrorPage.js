import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    // Error페이저 설정 ( css는 global파일에 저장)
    <Wrapper className='page-100'>
      <section>
        <h1>404</h1>
        <h3>페이지를 찾지 못했어요.</h3>
        <Link to='/' className='btn'>
          홈으로
        </Link>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`

export default ErrorPage
