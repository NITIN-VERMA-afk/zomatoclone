import React from "react";

const Addrestaurent = () => {
  return (
    <>
      <div className="hero">
        <div className="navbar">
          <div className="logo">
            <h1>
              zomato <br /> for business{" "}
            </h1>
          </div>
          <div className="list">
            <ul>
              <li>Advertise</li>
              <li>
                <button className="login">LOGIN </button>{" "}
              </li>
              <li>
                {" "}
                <button className="cre-acc">Create Account </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="center-texxt">
          <div className="texts">
            <p> Partner with Zomato</p>
            <p> at 0% commission for the 1st month!</p>
            <p>
              {" "}
              And get ads worth INR 1500. Valid for new restaurant partners in
              select cities.
            </p>
          </div>
          <div className="regist-btn">
            <span>
              {" "}
              <button className="btn-1-A">Register your restront </button>{" "}
              <button className="btn-2-A">
                {" "}
                Login in to view your exesting restront{" "}
              </button>{" "}
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
              {" "}
              <i
                class="fa-solid fa-circle-check"
                style={{ color: " #2cc40e" }}
              ></i>{" "}
              FSSAI license copy
            </li>
            <li>
              {" "}
              <i
                class="fa-solid fa-circle-check"
                style={{ color: " #2cc40e" }}
              ></i>{" "}
              Regular GSTIN (if applicable)
            </li>
            <li>
              {" "}
              <i
                class="fa-solid fa-circle-check"
                style={{ color: " #2cc40e" }}
              ></i>{" "}
              Your restaurant menu
            </li>
          </ul>
          <ul>
            <li>
              {" "}
              <i
                class="fa-solid fa-circle-check"
                style={{ color: " #2cc40e" }}
              ></i>{" "}
              PAN card copy
            </li>
            <li>
              {" "}
              <i
                class="fa-solid fa-circle-check"
                style={{ color: " #2cc40e" }}
              ></i>{" "}
              Bank account details
            </li>
            <li>
              {" "}
              <i
                class="fa-solid fa-circle-check"
                style={{ color: " #2cc40e" }}
              ></i>{" "}
              Dish images for top 5 items
            </li>
          </ul>
        </div>
      </div>
      <div className="partnerZomato">
        <h1>why u should partner with zomato ?</h1>
        <h5>
          {" "}
          Zomato enables you to get 60% more revenue, 10x new customers and
          boost your brand
        </h5>
        <p>visibility by providing insights to improve your business.</p>

        <div className="data">
          <div className="box1">
         
            <span>
              
              <i class="fa-solid fa-globe"></i> 1000+ cities <br /> in india{" "}
            </span>
          </div>
          <div className="box2">
          
            <span>
            
              <i class="fa-solid fa-hotel"></i> 3 lakh+ <br /> restorents
              listings
            </span>
          </div>
          <div className="box3">
            
            <span>
             
              <i class="fa-solid fa-calendar-check"></i>5.0 crore+ <br />
              monthly orders
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addrestaurent;
