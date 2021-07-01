{/* 가격 맞추기위해 +(39001) // 한국단위 돈 표시 */}
{/* ￦{(price+(39001)).toLocaleString('ko-KR') } */}
export const formatPrice = (number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100)
}

// flat() 사용해서 중첩된 array를 하나로 합체
export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type])
  if (type === 'colors') {
    unique = unique.flat()
  }
  return ['all', ...new Set(unique)]
}