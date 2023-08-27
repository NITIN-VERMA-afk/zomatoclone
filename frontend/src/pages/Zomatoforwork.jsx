import React from "react";
import Footer from "../componets/Footer";

const Zomatoforwork = () => {
  return (
    <>
      <div className="work-top">
        <h1 className="nav-1">
          zomato for <br /> enterprise
        </h1>
        <div className="work-top-text">
          <h1>Give gifts now perks</h1>
          <p>Recurring Meals | Rewards and Recognition | Brand Promotions</p>
          <button className="intrested">im intersted</button>
        </div>
      </div>
      <h1 className="t-1">whats in it for u?</h1>
      <div className="top-cards"> 
      <div className="boxx1">
        <h1><img className="logo-work" src="https://b.zmtcdn.com/data/o2_assets/d14c7a9fce638ab0e7b34887ccc5c6ec1631712088.png" alt="" /></h1>
        <h5>suit yourself</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias id
          explicabo ullam sequi amet vel.
        </p>
      </div>
      <div className="boxx2">
        
        <h1><img className="logo-work" src="https://b.zmtcdn.com/data/o2_assets/fb3618a41508221b3866f29df651c41a1631712011.png" alt="" /></h1>
        <h5>suit yourself</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias id
          explicabo ullam sequi amet vel.
        </p>
      </div>
      <div className="boxx3">
        
        <h1><img className="logo-work" src=" https://b.zmtcdn.com/data/o2_assets/f8ea914bf28ac96470652068e16732361631712047.png" alt="" /></h1>
        <h5>suit yourself</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias id
          explicabo ullam sequi amet vel.
        </p>
      </div>
       </div>
     

      <h1 className="t-1">whats in it for your employs?</h1>
      <div className="bottem-cards">
      <div className="top-cards"> 
      <div className="boxx1">
        <h1> <img className="logo-work" src="https://b.zmtcdn.com/data/o2_assets/bb35ca807cda5e68d912281f18427bd61631712031.png" alt="" /></h1>
        <h5>suit yourself</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias id
          explicabo ullam sequi amet vel.
        </p>
      </div>
      <div className="boxx2">
        
        <h1><img  className="logo-work" src="https://b.zmtcdn.com/data/o2_assets/3be7dec9a09a18acbf4191c508272e461631712066.png" alt="" /></h1>
        <h5>suit yourself</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias id
          explicabo ullam sequi amet vel.
        </p>
      </div>
      <div className="boxx3">
        
        <h1> <img  className="logo-work" src="https://b.zmtcdn.com/data/o2_assets/84b64a80b369e1d06d439ae43cc9bc781631711678.png" alt="" /></h1>
        <h5>suit yourself</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias id
          explicabo ullam sequi amet vel.
        </p>
      </div>
       </div>
      </div>
     

      <div className="bottem">
        <div className="sub-footer-work">
          <div className="sub-footer-work-left">
            <h1>what u are waiting for? </h1>
            <p>
              Please leave your contact details and a representative will get in
              touch with you within 48 hours.
            </p>
          </div>
          <div className="sub-footer-work-right">
            <h1>your details</h1>
            <form
              className="form-4"
              action="
          "
            >
              <input placeholder="official email address" type="text" />
              <input placeholder="Phone number" type="text" />
              <input placeholder="organisational name" type="text" />
            </form>
            <button className="find-right-btn">get started</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Zomatoforwork;
