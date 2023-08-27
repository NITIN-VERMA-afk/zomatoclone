import React from 'react'

const Footer = () => {
  return (
    <div>
         <footer>
        <div className="footer-top">
          <h1>Zommato</h1>

          <div className="buttons">
            <button className="btn-in">India</button>
            <button className="btn-lo">
           
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
             
              <i class="fa-brands fa-app-store"></i>Dowenload on the app store
            </button>
            <button className="google-app">
              
              <i class="fa-brands fa-google-play"></i> get it on google app
            </button>
          </div>
        </div>
        <hr />
        <p className="footer-copyright">
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners. 2008-2023
        </p>
        <p style={{ marginLeft: "12%" }}>© Zomato™ Ltd. All rights reserved.</p>
      </footer>
      
    </div>
  )
}

export default Footer

