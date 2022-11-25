import MainPage from "./components/MainPage";
import Rental from "./components/Rental";
import Whyus from  "./components/Whyus"
import Aboutus from  "./components/Aboutus"
import ContactUsM from "./components/ContactusM";
import {BrowserRouter,Route,Routes} from "react-router-dom"


function App() {
  return (<BrowserRouter>
   <Routes>
      <Route path='/' element={<MainPage />}/>
     <Route path='http://byebyebedbugs.ca/rental' element={<Rental/>}/>
     <Route path='http://byebyebedbugs.ca/whyus' element={<Whyus/>}/>
     <Route path='http://byebyebedbugs.ca/aboutus' element={<Aboutus/>}/>
     <Route path="http://byebyebedbugs.ca/contactus" element={<ContactUsM/>}/>
      </Routes> 
      </BrowserRouter>
  );
};

export default App;
