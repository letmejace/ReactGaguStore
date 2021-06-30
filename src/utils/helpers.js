{/* 가격 맞추기위해 +(39001) // 한국단위 돈 표시 */}
{/* ￦{(price+(39001)).toLocaleString('ko-KR') } */}
export const formatPrice = (number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100)
}


export const getUniqueValues = () => {}
