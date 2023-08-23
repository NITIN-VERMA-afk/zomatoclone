import React from "react";
import Footer from "../componets/Footer";

const Adervisepage = () => {
  return (
    <div>
      <div className="top-adv">
        <div className="top-nav-adv">
          <div className="ad-logo">
            <h1>zomato</h1>

            <p>zomato for business</p>
          </div>
          <div className="ad-right-ad">
            <ul>
              <li>
                {" "}
                <button className="ad-btn-1">Zomato for work</button>{" "}
              </li>
              <li>
                {" "}
                <button className="ad-btn-1">Add a restaurent</button>{" "}
              </li>
              <li>
                <button className="ad-btn-1">Contact Us</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="content-ad">
          <h1>Advertise on Zomato</h1>
          <p>For every marketing dollar spend, </p>
          <p>Zomato returns over 8x the investment</p>
          <button className="cd-btn">Ready To Start </button>
        </div>
      </div>
      <h1 className="h1-1200">
        12,000 restaurants already advertise on Zomato
      </h1>

      <h1 className="h2-1200"> Why advertise on Zomato?</h1>
      <div className="why-advertise">
        <div className="w-a-left">
          <div className="area">
            <h4>Guaranteed Customer Growth</h4>
            <p>
              Increase visits to your page which will drive more footfall and
              revenue for your restaurant.
            </p>
          </div>
          <div className="area2">
            <h4>Guaranteed Customer Growth</h4>
            <p>
              Increase visits to your page which will drive more footfall and
              revenue for your restaurant.
            </p>
          </div>
          <div className="area3">
            <h4>Guaranteed Customer Growth</h4>
            <p>
              Increase visits to your page which will drive more footfall and
              revenue for your restaurant.
            </p>
          </div>
          <div className="area4">
            <h4>Guaranteed Customer Growth</h4>
            <p>
              Increase visits to your page which will drive more footfall and
              revenue for your restaurant.
            </p>
          </div>
        </div>
        <div className="w-d-right">
          <img
            src="https://b.zmtcdn.com/web/merchant/advertize/650613bdcce1205a2ad0c65d76166fbf1564552339.jpeg"
            alt=""
          />
        </div>
       
      </div>
      <h1 className="h1-1200-ad">how to advertise on zomato</h1>

      <div className="howadervtise">
        <img src="https://b.zmtcdn.com/data/pro/5361f27b5367bc1850213500c310a2031596278954.png " alt="" />
        <div className="text-howad">
          <h5>Drive us to you</h5>
          <p>Generate guaranteed visits to your page via dynamic search ads on our web and mobile platform.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Adervisepage;
