import React from "react";
import Footer from "../componets/Footer";
import { NavLink } from "react-router-dom";

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
                <NavLink to="/zomatoforwork">
                  <button className="ad-btn-1">Zomato for work</button>
                </NavLink>
              </li>
              <li>
                <button className="ad-btn-1">Add a restaurent</button>
              </li>
              <li>
                <NavLink to="/contactus">
                  {" "}
                  <button className="ad-btn-1">Contact Us</button>{" "}
                </NavLink>
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
        <img
          className="howad-img"
          src="https://b.zmtcdn.com/data/pro/5361f27b5367bc1850213500c310a2031596278954.png "
          alt=""
        />
        <div className="text-howad">
          <h5>Drive us to you</h5>
          <p>
            Generate guaranteed visits to your page via dynamic <br /> search
            ads on our web and mobile platform.
          </p>
        </div>
      </div>
      <div className="howadervtise">
        <div className="text-howad">
          <h5>Own your Category</h5>
          <p>
            Boost your placement within relevant collections for your brand.
          </p>
        </div>
        <img
          src=" https://b.zmtcdn.com/web/business/7af7763fa493e29ebaca8d5dab62cf691565273608.png"
          alt=""
        />
      </div>
      <h5 className="osc"> Our satisfied customers say</h5>

      <div className="sub-footer-ad">
        <div className="sub-footer-ad-left">
          <h1>want to know more </h1>
          <p>
            Please leave your contact details here and we'll get back to you
            within 24 hours
          </p>
        </div>

        <div className="sub-footer-ad-right">
          <div className="container-sub-footer">
            <h1>your contact details</h1>
            <form className="form-ad" action="">
              <input type="text" placeholder="city" />
              <input type="text" placeholder="Restaurent name" />
              <input type="text" placeholder="full name" />
              <input type="text" placeholder="Email id" />
              <input type="text" placeholder="phone no" />
            </form>
            <button className="find-right-btn">submit</button>
          </div>
        </div>
      </div>

      <div className="getzomato-foot">
        <div className="getZomato-foot-left">
          <img
            className="img5"
            src="https://b.zmtcdn.com/web/commons/8b714f6f2ae12bf9e5f75549a984fc431564655708.png"
            alt=""
          />
        </div>
        <div className="getZomato-foot-right">
          <h1 className="get-z">get the zomato app</h1>
          <p className="z-2">
            We will send you a link, open it on your phone to download the app
          </p>
          <div className="radio">
            <input type="radio" name="" id="" />
            <label htmlFor="">Email</label>
            <input type="radio" name="" id="" />
            <label htmlFor="">phone</label>
          </div>
          <div className="input-btn">
            <input placeholder="Email" type="text" />
            <button className="btn-share">share app link</button>
          </div>
          <p className="dowenload">dowenload app from</p>
          <button className="app-store-1">
            <i class="fa-brands fa-app-store"></i>Dowenload on the app store
          </button>
          <button className="google-app-1">
            <i class="fa-brands fa-google-play"></i> get it on google app
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Adervisepage;
