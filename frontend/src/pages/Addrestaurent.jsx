import React from "react";
import Card from "../componets/Card";
import Footer from "../componets/Footer";
import { NavLink } from "react-router-dom";

const Addrestaurent = () => {
  return (
    <>
      <div className="hero">
        <div className="navbar">
          <div className="logo">
            <h1>
              zomato <br /> for business
            </h1>
          </div>
          <div className="list">
            <ul>
              <li>Advertise</li>
              <li>
                <button className="login">
                  {" "}
                  <NavLink
                    style={({ isActive }) =>
                      isActive
                        ? {
                            color: "white",
                            background: "none",
                          }
                        : { color: "whitesmoke", background: "transparent" }
                    }
                  >
                    {" "}
                    Login
                  </NavLink>{" "}
                </button>
              </li>
              <li>
                <button className="cre-acc">
                  {" "}
                  <NavLink
                    style={({ isActive }) =>
                      isActive
                        ? {
                            color: "white",
                            background: "none",
                            listStyle: "none",
                          }
                        : {
                            color: "whitesmoke",
                            background: "transparent",
                            listStyle: "none",
                          }
                    }
                  >
                    {" "}
                    Create Account{" "}
                  </NavLink>{" "}
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="center-texxt">
          <div className="texts">
            <p> Partner with Zomato</p>
            <p> at 0% commission for the 1st month!</p>
            <p>
              And get ads worth INR 1500. Valid for new restaurant partners in
              select cities.
            </p>
          </div>
          <div className="regist-btn">
            <span>
              <button className="btn-1-A">Register your restront </button>
              <button className="btn-2-A">
                Login in to view your exesting restront
              </button>
            </span>
            <p> Need help? Please email us at merchantonboarding@zomato.com </p>
          </div>
        </div>
      </div>
      <div className="get-startedBox">
        <h1>get starting with online odering</h1>
        <p> Please keep the documents ready for a smooth signup</p>
        <div className="lists">
          <ul>
            <li>
              <i
                class="fa-solid fa-circle-check"
                style={{ color: " #2cc40e" }}
              ></i>
              FSSAI license copy
            </li>
            <li>
              <i
                class="fa-solid fa-circle-check"
                style={{ color: " #2cc40e" }}
              ></i>
              Regular GSTIN (if applicable)
            </li>
            <li>
              <i
                class="fa-solid fa-circle-check"
                style={{ color: " #2cc40e" }}
              ></i>
              Your restaurant menu
            </li>
          </ul>
          <ul>
            <li>
              <i
                class="fa-solid fa-circle-check"
                style={{ color: " #2cc40e" }}
              ></i>
              PAN card copy
            </li>
            <li>
              <i
                class="fa-solid fa-circle-check"
                style={{ color: " #2cc40e" }}
              ></i>
              Bank account details
            </li>
            <li>
              <i
                class="fa-solid fa-circle-check"
                style={{ color: " #2cc40e" }}
              ></i>
              Dish images for top 5 items
            </li>
          </ul>
        </div>
      </div>
      <div className="partnerZomato">
        <h1>why u should partner with zomato ?</h1>
        <h5>
          Zomato enables you to get 60% more revenue, 10x new customers and
          boost your brand
        </h5>
        <p>visibility by providing insights to improve your business.</p>

        <div className="data">
          <div className="box-1">
            <span>
              <i class="fa-solid fa-globe"></i> 1000+ cities <br /> in india{" "}
            </span>
          </div>
          <div className="box-2">
            <span>
              <i class="fa-solid fa-hotel"></i> 3 lakh+ <br /> restorents
              listings
            </span>
          </div>
          <div className="box-3">
            <span>
              <i class="fa-solid fa-calendar-check"></i>5.0 crore+ <br />
              monthly orders
            </span>
          </div>
        </div>
      </div>
      {/* how it work div  */}
      <div className="howItWork">
        <h1>How it Works ?</h1>
      </div>
      <div className="card-containers">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="section-5">
        <h1>Alredy have your restaurant listed?</h1>
        <p>Seach here and claim the ownership of your restaurent</p>
        <span>
          {" "}
          <button>Delhi ncr</button> <input type="search" name="" id="" />{" "}
        </span>
      </div>

      <div className="find-restraurent">
        <div className="find-left">
          {" "}
          <h1> cannot find your favourite restaurant on zomato?</h1>
          <p>sumbit the details and our team get the restraurent onboard</p>
        </div>

        <div className="find-right">
          <input type="text" name="" id="" placeholder="Restaurent Name" />
          <input type="text" name="" id="" placeholder="Restaurent Location" />
          <input
            type="text"
            name=""
            id=""
            placeholder="Restaurent Contact Number"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="What do u like about the restaurent ?"
          />
          <br />
          <button className="find-right-btn">sumbit</button>
          <p>restaurent owner can add restaurent from here</p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Addrestaurent;
