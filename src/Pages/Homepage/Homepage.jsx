import React from 'react'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import BannerSlider from '../../COMPONENTS/Banners/BannerSlider'
import HomeCatagories from '../../COMPONENTS/Catagories/HomeCatagories'
import ProductSidebar from '../../COMPONENTS/Product/ProductSidebar'


function Homepage() {
  return (
    <div>
        <Navbar />
        <BannerSlider/>
        <HomeCatagories/>
         <ProductSidebar/>

       <h1>Home</h1>
    </div>
  )
}

export default Homepage
