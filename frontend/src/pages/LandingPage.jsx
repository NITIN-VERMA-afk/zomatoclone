import React from "react";
import { NavLink } from "react-router-dom";



import Glocations from "../componets/Glocations";
import Locations from "../Data/Locations";
import Contries from "../Data/Contries";

const LandingPage = () => {
  const newposiotion = Locations.map((location) => {
    return <Glocations key={location.key} name={location.name} />;
  });
  const newCOntries = Contries.map((Contries) => {
    return <Glocations key={Contries.key} name={Contries.name} />;
  });

  return (
    <>
      <div className="container">
        <div className="nav">
          <ul>
            <NavLink
              to="/addrestaurents"
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "white",
                      background: "none",
                    }
                  : { color: "whitesmoke", background: "transparent" }
              }
            >
              <li>Add restaurant</li>
            </NavLink>
            <NavLink
              to="/login"
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "white",
                      background: "none",
                    }
                  : { color: "whitesmoke", listStyle: "none" }
              }
            >
              <li>Log in </li>
            </NavLink>
            <NavLink
              to="/signup"
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "white",
                      background: "none",
                    }
                  : { color: "whitesmoke", background: "transparent" }
              }
            >
              <li>sign up</li>
            </NavLink>
          </ul>
        </div>

        <div className="landingpage-center">
          <h1>Zomato</h1>
          <p>Find the best restaurents, cafe </p>
          <p>and bars in india </p>
        </div>
      </div>
      <span className="p-locations">Popular locations in india</span>
      <div className="sub-text-landing">
        <p>
          From swanky upscale restaurants to the cosiest hidden gems serving the
          most incredible food,
        </p>
        <p>
          Zomato covers it all. Explore menus, and millions of restaurant photos
          and reviews from users
        </p>
        <p> just like you, to find your next great meal.</p>
      </div>

      <div className="res-loaction">{newposiotion}</div>
      <div className="con">
        <h1>All Countries </h1>
      </div>
      <div className="all-con-div">{newCOntries}</div>

      {/* footer start here */}
      <footer>
        <div className="footer-top">
          <h1>Zommato</h1>

          <div className="buttons">
            <button className="btn">India</button>
            <button className="btn">
              {" "}
              <i class="fa-solid fa-globe"></i> Location
            </button>
          </div>
        </div>
        <div className="boxes">
          <div className="box1">
            <h5>About Zomato</h5>
            <ul className="ul-items">
              <li>Who we are</li>
              <li> blog</li>
              <li> work with us</li>
              <li>invester relation</li>
              <li>Report fraud</li>
              <li>contact us </li>
            </ul>
          </div>
          <div className="box2">
            <h5>ZOMAVERSE</h5>
            <ul className="ul-items">
              <li>Zomato</li>
              <li> Blinkit</li>
              <li> Fedding India</li>
              <li>HyperPure</li>
              <li>Zomaland</li>
            </ul>
          </div>
          <div className="box3">
            <h5>FOR RESTAURANTS</h5>
            <ul className="ul-items">
              <li>partner with us </li>
              <li>Apps for u</li>
            </ul>

            <h5>for enterprise</h5>
            <ul className="ul-items">
              <li>Zomato for enterprise </li>
            </ul>
          </div>

          <div className="box4">
            <h3>learn more</h3>
            <ul className="ul-items">
              <li>privacy</li>
              <li>security</li>
              <li>conditions</li>
              <li>directory</li>
            </ul>
          </div>
          <div className="box5">
            <h3>box links</h3>
            <ul id="icons-footer" className="ul-items">
              <li className="li-round">
                <i class="fa-brands fa-linkedin-in"></i>
              </li>
              <li className="li-round">
                <i class="fa-brands fa-instagram"></i>
              </li>
              <li className="li-round">
                <i class="fa-brands fa-twitter"></i>
              </li>
              <li className="li-round">
                <i class="fa-brands fa-youtube"></i>
              </li>
              <li className="li-round">
                <i class="fa-brands fa-facebook"></i>
              </li>
            </ul>
            <button className="app-store">
              {" "}
              <i class="fa-brands fa-app-store"></i>Dowenload on the app store
            </button>
            <button className="google-app">
              {" "}
              <i class="fa-brands fa-google-play"></i> get it on google app
            </button>
          </div>
        </div>
        <hr />
        <p className="footer-copyright">
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners. 2008-2023{" "}
        </p>
        <p style={{ marginLeft: "12%" }}>© Zomato™ Ltd. All rights reserved.</p>
      </footer>
    </>
  );
};

export default LandingPage;
