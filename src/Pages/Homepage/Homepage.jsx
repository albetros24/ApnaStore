import React from 'react'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import BannerSlider from '../../COMPONENTS/Banners/BannerSlider'
import HomeCatagories from '../../COMPONENTS/Catagories/HomeCatagories'
import ProductSidebar from '../../COMPONENTS/Product/ProductSidebar'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'


function Homepage() {
  return (
    <div>
        <Navbar />
        <BannerSlider/>
        <HomeCatagories/>
         <ProductSidebar/>
         <Footer1/>
         <Footer2/>
    </div>
  )
}

export default Homepage
