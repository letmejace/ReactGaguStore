import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import heroBcg from '../assets/blue.jpg'
import heroBcg2 from '../assets/furn.jpg'

const Hero = () => {
  // 메인화면 hero-components구성
  return (
    <Wrapper className='section-center'>
      <article className='content'>
        <h1>
          가구쇼핑의 시작은 <br />
          GAGU Store,
        </h1>
        <p>
          당신의 생활습관, 환경에 대한 이해와 전문성을 바탕으로 직접 설계하고, 
          제대로 제조하는 기본에 충실한 혁신적 가구 새로운 디자인, 합리적인 가격의 
          믿을 수 있는 품질로 저마다의 라이프 스타일에 따라 자유롭게 변화할 수 있는 
          실용적이고 감각적인 가구.<br />
          가구를 '제대로' 만드는 Gagu Store입니다.
          <br />
        </p>
        <Link to='/products' className='btn hero-btn'>
          shop now
        </Link>
      </article>
      <article className='img-container'>
        <img src={heroBcg} alt="nice table" className='main-img'/>
        <img src={heroBcg2} alt="person working" 
          className='accent-img'/>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`

  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      color: var(--clr-primary-1);
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-custom-3);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`

export default Hero
