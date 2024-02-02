
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './component/Header';
import Home from "./Home";
import About from "./About";
import Stock from "./Stock";

import Footer from "./component/Footer";
import Vagitable from "./component/Vagitable";
import Dairy from "./component/Dairy-Product";
import Spices from "./component/Spices";
import Fruits from "./component/Fruits";
import Upload from "./component/upload/Upload";
import ExcelUpload from "./component/upload/ExcelUpload";

function App() {
  return (
   <div className="allpage">
   <BrowserRouter>
<Header/>
<Routes>
  <Route path = "/" element ={<Home/>}></Route>
  <Route path = "/about" element ={<About/>}></Route>
  <Route path = "/stock" element ={<Stock/>}></Route>
  <Route path = "/upload" element ={<Upload/>}></Route>
  <Route path = "/vagitable" element ={<Vagitable/>}></Route>
  <Route path = "/dairy" element ={<Dairy/>}></Route>
  <Route path = "/spice" element ={<Spices/>}></Route>
  <Route path = "/fruit" element ={<Fruits/>}></Route>
  <Route path = "/excelupload" element ={<ExcelUpload/>}></Route>


</Routes>
    
   </BrowserRouter>
   <Footer/>
   </div>
  );
}

export default App;
