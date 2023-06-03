import React from 'react'
import data  from "./data"
import Slider from "react-slick";
import "./BannerSlider.css"
function BannerSlider() {
 const items=data.map((item)=>{
    return(
        <div className="imagecont" key={item.id}>
          <img src={item.img} alt="images"/>  
          <div className="content">
             <h2>{item.title}</h2>
             <span>{item.description}</span>
             <button>Shop Now </button>
            </div> 
        </div>
    )
     
 }
 )
 var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  return (
    <div className='bannerSlider'>
        <Slider className="bannerSlider" {...settings}>
            {items}
        </Slider>
    </div>
  )
}

export default BannerSlider
