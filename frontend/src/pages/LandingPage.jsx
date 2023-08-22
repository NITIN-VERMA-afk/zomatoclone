import React from "react";
import { NavLink } from "react-router-dom";
import Glocations from "../componets/Glocations";
import Country from "../componets/Country"

import Footer from "../componets/Footer";

const LandingPage = () => {


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
                  : {
                      color: "whitesmoke",
                      background: "transparent",
                      textDecoration: "none",
                    }
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
                  : {
                      color: "whitesmoke",
                      listStyle: "none",
                      textDecoration: "none",
                    }
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
                  : {
                      color: "whitesmoke",
                      background: "transparent",
                      textDecoration: "none",
                    }
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

      <div className="res-loaction"><Glocations/></div>
      <div className="con">
        <h1>All Countries </h1>
      </div>
      <div className="all-con-div"><Country/> </div>

      {/* footer start here */}
      <Footer />
    </>
  );
};

export default LandingPage;
