import React from "react";
import "./HomeCatagories.css";
import img1 from "../../images/HomepageCat/1.png";
import img2 from "../../images/HomepageCat/2.png";
import img3 from "../../images/HomepageCat/3.png";
import img4 from "../../images/HomepageCat/4.png";
function HomeCatagories() {
  return (
    <div className="homeCat">
      <div className="container">
        <img src={img1} alt="img1" />
        <div className="content">
          <h1>Vegetables that your doorstep!</h1>
          <span>Shop vegetable now</span>
        </div>
      </div>
      <div className="container">
        <img src={img2} alt="img2" />
        <div className="content">
          <h1>Vegetables that your doorstep!</h1>
          <span>Shop vegetable now</span>
        </div>
      </div>
      <div className="container">
        <img src={img3} alt="img3" />
        <div className="content">
          <h1>Vegetables that your doorstep!</h1>
          <span>Shop vegetable now</span>
        </div>
      </div>
      <div className="container">
        <img src={img4} alt="img4" />
        <div className="content">
          <h1>Vegetables that your doorstep!</h1>
          <span>Shop vegetable now</span>
        </div>
      </div>
    </div>
  );
}

export default HomeCatagories;
