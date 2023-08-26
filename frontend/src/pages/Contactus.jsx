import React from "react";
import Footer from "../componets/Footer";
import { Link } from "react-router-dom";
const Contactus = () => {
  return (
    <>
      <div className="navbar-contact-us">
        <h1>Zomato</h1>
        <div className="mid">
          <label htmlFor="">
            <i class="fa-solid fa-location-dot"></i>
          </label>
          <input type="text" placeholder="ahmedabad" />
          <label htmlFor="">
            <i class="fa-solid fa-magnifying-glass"></i>
          </label>
          <input
            type="text"
            placeholder="search for restaurent,cuisine or a dish "
          />
        </div>
        <ul className="eve-e">
          <Link to="/login">
            <li>Login</li>
          </Link>
          <Link to="/signup">
            <li>sign up</li>
          </Link>
        </ul>
      </div>

      {/* image here */}
      <div className="container-img-contact">
        <h1>we would love to hear from you!</h1>
      </div>
      <div className="div-hero">
        <div className="contact-left">
          <input type="text" placeholder="how we can help u" />
          <input type="text" placeholder="Full name" />
          <input type="text" placeholder="Email address" />
          <input type="text" placeholder="Mobile Number(optional)" />
          <textarea name="" id="" cols="30" rows="5">
            Type text
          </textarea>
          <button>submit</button>
        </div>
        <div className="contact-right">
          <div className="top-contact">
            <h1>Report a Safety Emergency</h1>
            <p>We are committed to the safety of everyone using Zomato.</p>
            <button>Report here</button>
          </div>
          <div className="bottem-contact">
            <h1>issue with your live orders</h1>
            <p>
              Click on the 'Support' or 'Online ordering help' section in your
              app to connect to our customer support team.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contactus;
