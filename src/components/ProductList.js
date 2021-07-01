import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'

// 상품이 없다면 제품이 없다고 알림
const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext()
  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: 'none' }}>
        일치하는 상품이 없어요
      </h5>
    )
  }
  if (grid_view === false) {
    // List View 리스트
    return <ListView products={products} />
  }
  // Grid view 리스트
  return <GridView products={products}>product list</GridView>
}

export default ProductList