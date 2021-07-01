import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
// 메뉴 links
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

// services 설명
export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: '사용 편의성',
    text:
      'Gagu Store는 보기에도 쓰기에도 아름다운 가구를 직접 디자인합니다. 일룸의 ‘홈가구 연구소’는 심미적 아름다움과 함께 사용 편의성에 대해서도 치열하게 고민합니다. 선 하나, 각도 하나에도 고객을 배려하는 마음을 담습니다.',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: '디자인 우수성',
    text:
      'Gagu Store의 디자인은 이미 해외에서도 인정받고 있습니다. 세계적인 권위를 자랑하는 레드닷, IDEA, JAPAN GOOD DESIGN 등 다수의 어워드에서 디자인의 우수성을 인정받아 수상작으로 선정 되었습니다.',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: '글로벌 감각',
    text:
      'Gagu Store의 디자인은 지금 이 시간에도 계속해서 발전하고 있습니다. 유명 디자이너와의 컬래버레이션을 통해 그동안 접하기 어려웠던 디자이너 가구를 Gagu Store의 감각으로 고객에게 선사합니다.',
  },
]

// 상품목록 API
export const products_url = 'https://course-api.com/react-store-products'

// 개별상품 API
export const single_product_url = `https://course-api.com/react-store-single-product?id=`
