import React from 'react'
import styled from 'styled-components'
import { services } from '../utils/constants'

const Services = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <article className='header'>
          <h2>
            custom furniture <br />
            built only for you
          </h2>
          <p>
            Gagu Store는 진정성 있는 가구를 만들기 위해 끊임없이 고민하고 연구합니다. 당신의 생활습관, 환경에 대한 이해와 전문성을 바탕으로 직접 설계하고, 제대로 제조하는 기본에 충실한 혁신적 가구 새로운 디자인, 합리적인 가격의 믿을 수 있는 품질로 저마다의 라이프 스타일에 따라 자유롭게 변화할 수 있는 실용적이고 감각적인 가구. 가구를 '제대로' 만드는 Gagu Store입니다.
          </p>
        </article>
        <div className="services-center">
          {services.map((service) => {
            const {id, icon, title, text} = service
            return (
              <article key={id} className='service'>
                <span className='icon'>{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  h3,
  h4 {
    color: var(--clr-primary-1);
  }
  padding: 5rem 0;

  background: var(--clr-primary-10);

  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-primary-3);
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: var(--clr-primary-7);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      color: var(--clr-primary-2);
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`
export default Services
