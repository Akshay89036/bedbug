import MainPage from "./components/MainPage";
import Rental from "./components/Rental";
import Whyus from  "./components/Whyus"
import Aboutus from  "./components/Aboutus"
import ContactUsM from "./components/ContactusM";
import {BrowserRouter,Route,Routes} from "react-router-dom"
// import { HashRouter as Router, Route,Routes } from "react-router-dom";

function App() {
  return ( 
      <BrowserRouter>
     <Routes>
        <Route exact path='/' element={<MainPage />}/>
        <Route exact path='/rental' element={<Rental/>}/>
        <Route exact path='/whyus' element={<Whyus/>}/>
        <Route  exact path='/aboutus' element={<Aboutus/>}/>
        <Route exact path="/contactus" element={<ContactUsM/>}/>
      </Routes> 
      </BrowserRouter>
  );
};

export default App;
