import React from 'react'
import "./CatagorySidebar.css"
import img1 from "../../images/HomepageCat/1.png"
import img2 from "../../images/HomepageCat/2.png"
import img3 from "../../images/HomepageCat/3.png"
import img4 from "../../images/HomepageCat/4.png"

function CatagorySidebar() {
    const data=[
        {
            id:1,
            categoryimg:img1,
            categoryname:"Category 1"

        },
        {
            id:2,
            categoryimg:img2,
            categoryname:"Category 2"

        },
        {
            id:3,
            categoryimg:img3,
            categoryname:"Category 3"

        },
        {
            id:4,
            categoryimg:img4,
            categoryname:"Category 4"

        },
        {
            id:5,
            categoryimg:img1,
            categoryname:"Category 5"

        },
        {
            id:6,
            categoryimg:img2,
            categoryname:"Category 6"

        },
        {
            id:7,
            categoryimg:img3,
            categoryname:"Category 7"

        }
       

    ]
  return (
    <div className='categorysidebar'>
       { data.map((item) => {
            return(
               <div className='category'>
                <img src={item.categoryimg} alt="img" />
                <h3>{item.categoryname}</h3>
               </div>
            )
        })}
    </div>
  )
}

export default CatagorySidebar
