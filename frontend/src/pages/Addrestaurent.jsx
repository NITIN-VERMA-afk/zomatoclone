import React,{useState} from "react";

import Card from "../componets/Card";
import Footer from "../componets/Footer";
import { NavLink } from "react-router-dom";

const Addrestaurent = () => {
  const[more,setmore]=useState(false);
  const[more2,setmore2]=useState(false);
  const[more3,setmore3]=useState(false);
  const[more4,setmore4]=useState(false);

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
              <NavLink to="/advertisepage">  <button className="btn-advertise"> Advertise </button>  </NavLink>
              <li>
                <button className="login">
                  {" "}
                  <NavLink to="/login"
                    style={({ isActive }) =>
                      isActive
                        ? {
                            color: "white",
                            background: "none",
                          }
                        : { color: "whitesmoke", background: "transparent",textDecoration:'none' }
                    }
                  >
                   
                    Login
                  </NavLink>
                </button>
              </li>
              <li>
                <button className="cre-acc">
              
                  <NavLink  to='/signup'
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
                            textDecoration:'none',
                          }
                    }
                  >
                   
                    Create Account
                  </NavLink>
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
      <div className="get-startedBox-box"> 
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
      </div>
      <div className="partnerZomato">
        <h1>why u should partner with zomato ?</h1>
        <p>
          Zomato enables you to get 60% more revenue, 10x new customers and
          boost your brand
        </p>
        <p>visibility by providing insights to improve your business.</p>

        <div className="data">
          <div className="box-1">
            <span>
              <i class="fa-solid fa-globe"></i> 1000+ cities <br /> in india
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
        <span className="">
         
          <button className="delhi-ncr">Delhi ncr</button> <input  className='delhi-ncr-input' placeholder="search for your restaurent ,eg Greenland cafe" type="search" name="" id="" />{" "}
        </span>
      </div>

      <div className="start-your-jurny">
        <h1>start your journey with zomato </h1>
        <p>create your restaurent page with and resgister for online order</p>
        <button className="start-btn">start now</button>
      </div>


      <div className="frequently">
        <button onClick={()=>{setmore(!more)}}><p className="move-p">What will Zomato charge me for creating a page on its platform?</p></button>
        <p style={more ? {display:"block"}: {display:"none"}}>Creating a restaurant page on Zomato is free of cost. You can maintain your page by replying to reviews and do a lot more without any charges.</p>
      </div>
      <div className="frequently">
        <button onClick={()=>{setmore2(!more2)}}><p className="move-p" >What will Zomato charge me for creating a page on its platform?</p></button>
        <p style={more2 ? {display:"block"}: {display:"none"}}>Creating a restaurant page on Zomato is free of cost. You can maintain your page by replying to reviews and do a lot more without any charges.</p>
      </div>
      <div className="frequently">
        <button onClick={()=>{setmore3(!more3)}}><p className="move-p">What will Zomato charge me for creating a page on its platform?</p></button>
        <p style={more3 ? {display:"block"}: {display:"none"}}>Creating a restaurant page on Zomato is free of cost. You can maintain your page by replying to reviews and do a lot more without any charges.</p>
      </div>
      <div className="frequently">
        <button onClick={()=>{setmore4(!more4)}}><p className="move-p">What will Zomato charge me for creating a page on its platform?</p></button>
        <p style={more4 ? {display:"block"}: {display:"none"}}>Creating a restaurant page on Zomato is free of cost. You can maintain your page by replying to reviews and do a lot more without any charges.</p>
      </div>

       


      <div className="find-restraurent">
        <div className="find-left">
         
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
