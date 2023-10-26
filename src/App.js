
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Project from "./Components/Project";
import Home from "./Components/Home";
import {BrowserRouter as Router,Routes,Route}from "react-router-dom";



function App() {
  return (
    <div className=" ">
      
       <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/project" element={<Project/>}/>
        </Routes>
        <Footer/>
       </Router>

       <div className="row">
      
       </div>
       </div>
      
  )}
  export default App;
       
       
      
       