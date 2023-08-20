import React from "react";
import { NavLink } from "react-router-dom";



import Glocations from "../componets/Glocations";
import Locations from "../Data/Locations";
import Contries from "../Data/Contries";
import Footer from "../componets/Footer";

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
     <Footer/>
    </>
  );
};

export default LandingPage;
