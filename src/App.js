import MainPage from "./components/MainPage";
import Rental from "./components/Rental";
import {BrowserRouter,Route,Routes} from "react-router-dom"

function App() {
  return (<BrowserRouter>
   <Routes>
      <Route path='/' element={<MainPage />}/>
     <Route path='/rental' element={<Rental/>}/>
      </Routes> 
      </BrowserRouter>
  );
};

export default App;
