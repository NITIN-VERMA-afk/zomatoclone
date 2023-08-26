

import {Routes,Route} from "react-router-dom"
import LandingPage from "./pages/LandingPage";
import Nopage from "./pages/Nopage";
import Addrestaurent from "./pages/Addrestaurent";
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import Zomatoforwork from "./pages/Zomatoforwork"
import Contactus from "./pages/Contactus.jsx"
import Advertisepage from "./pages/Advertisepage";
import './styles/Landingp.css'
import './styles/Addr.css'
import './styles/Cardstyle.css'
import './styles/Loginstyle.css'
import "./styles/SignUp.css"
import "./styles/Advcss.css"
import './styles/work.css'
import './styles/contact.css'
import axios from 'axios'


axios.default.baseurl='http://localhost:5000'
axios.default.withcredancials=true




function App() {

  return (
       <>
       <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/addrestaurents" element={<Addrestaurent/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/zomatoforwork" element={<Zomatoforwork/>} />
          <Route path="/contactus" element={<Contactus/>} />
          <Route path="/advertisepage" element={<Advertisepage/>} />
          <Route path="*" element={<Nopage/>} />

       </Routes>
       
       </>
  );
}

export default App;
