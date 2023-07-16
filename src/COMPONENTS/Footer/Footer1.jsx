import React from "react";
import "./Footer1.css";
import veges from "../../images/vegeF.png";
function Footer1() {
  return (
    <div className="footer1">
      <div className="left">
        <img src={veges} alt="footerVeges" />
      </div>
      <div className="right">
        <h1>Fresh Vegetables ,Fruits & Grocery all at your doorstep!!</h1>
        <p>
          We deliver fresh vegetables & fruits at your doorstep. We deliver
          fresh vegetables & fruits at your doorstep.
        </p>
      </div>
    </div>
  );
}

export default Footer1;
