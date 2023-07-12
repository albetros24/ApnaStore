import React from "react";
import "./AllProduct.css";
import ProductCard from "./ProductCard";
import img1 from "../../images/HomepageCat/1.png";
import img2 from "../../images/HomepageCat/2.png";
import img3 from "../../images/HomepageCat/3.png";
import img4 from "../../images/HomepageCat/4.png";
function AllProduct() {
  const products = [
    {
      id: 1,
      productimg: img1,
      productname: "Product 1",
      productprice: 100,
      counttype: "1 each",
      discount: 12,
    },
    {
      id: 2,
      productimg: img2,
      productname: "Product 1",
      productprice: 100,
      counttype: "1 each",
      discount: 12,
    },
    {
      id: 3,
      productimg: img3,
      productname: "Product 1",
      productprice: 100,
      counttype: "1 each",
      discount: 12,
    },
    {
      id: 4,
      productimg: img4,
      productname: "Product 1",
      productprice: 100,
      counttype: "1 each",
      discount: 12,
    },
    {
      id: 5,
      productimg: img1,
      productname: "Product 1",
      productprice: 100,
      counttype: "1 each",
      discount: 12,
    },
    {
      id: 6,
      productimg: img2,
      productname: "Product 1",
      productprice: 100,
      counttype: "1 each",
      discount: 12,
    },
    {
      id: 7,
      productimg: img3,
      productname: "Product 1",
      productprice: 100,
      counttype: "1 each",
      discount: 12,
    },
    {
      id: 7,
      productimg: img3,
      productname: "Product 1",
      productprice: 100,
      counttype: "1 each",
      discount: 12,
    },
    {
      id: 7,
      productimg: img3,
      productname: "Product 1",
      productprice: 100,
      counttype: "1 each",
      discount: 12,
    },
    {
      id: 7,
      productimg: img3,
      productname: "Product 1",
      productprice: 100,
      counttype: "1 each",
      discount: 12,
    },
  ];
  return (
    <div className="allproducts">
      <h1>All Product</h1>
      <div className="products">
        {products.map((product) => {
          return (
             <ProductCard product={product} key={product.id}/>
           
          );
        })}
      </div>
    </div>
  );
}

export default AllProduct;
