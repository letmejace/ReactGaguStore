import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/blue-about.jpg'

// About 페이지
const AboutPage = () => {
  return <main>
    {/* PageHero component로 메뉴목록 표시 */}
    <PageHero title='about' />
    {/* Wrapper CSS적용 */}
    <Wrapper className="page section section-center">
      <img src={aboutImg} alt="nice desk"/>
      <article>
        <div className="title">
          <h2>Our Story</h2>
          <div className="underline"></div>
        </div>
        <p>
          <strong>고객에게 지속 가능한 가치를 제공한다.</strong><br />
          고객에게 좋은 제품과 최선의 서비스로 최고의 만족을 선사하고, 주주에게
          정직한 기업 활동을 기반으로 창출된 이익을 나누고 장기적인 수일을
          보장하는 것이 바로 지속 가능한 가치를 제공하는 것입니다.
          <br /><br />
          <strong>회사가 각 구성원의 안정적 삶의 터전이자진정한 자아실현의 장이 된다.</strong><br />
          일을 통해 개인의 역량이 아낌없이 발휘되고, 그 결과에 따라 정당한
          대우를 받아 삶의 질을 향상시킬 수 있는 일터가 바르고 좋은 회사입니다.
          우리는 직장생활을 통해 보람을 찾고 개인의 성장을 이루어
          회사 전체가 발전하는 바르고 좋은 회사를 지향합니다.
        </p>
      </article>
    </Wrapper>
  </main>
}

// Styled Componont, JS파일안에서 CSS적용 
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  /* 반응형 : 992px밑으로 작아지면 아래 속성으로 변경 */
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
