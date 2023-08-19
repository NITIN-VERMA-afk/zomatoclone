import {Routes,Route} from "react-router-dom"
import LandingPage from "./pages/LandingPage";
import Nopage from "./pages/Nopage";
import Addrestaurent from "./pages/Addrestaurent";
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import './styles/Landingp.css'
import './styles/Addr.css'




function App() {
  return (
       <>
       <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/addrestaurents" element={<Addrestaurent/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="*" element={<Nopage/>} />

       </Routes>
       </>
  );
}

export default App;
