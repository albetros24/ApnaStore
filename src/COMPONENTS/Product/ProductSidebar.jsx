import React from 'react'
import "./Product_Sidebar.css"
import CatagorySidebar from './CatagorySidebar'
import AllProduct from './allProduct'

function ProductSidebar() {
  return (
    <div className='product_sidebar'>
       <CatagorySidebar/>
      <AllProduct/> 
     
    </div>
  )
}

export default ProductSidebar
