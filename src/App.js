import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";

function App(){
  return(
    <div>
      <div>
        <Link to="/">Home</Link>
        <br/>
      <Link to ="/about">About</Link>
      </div>
      <Routes>
      <Router path="/" element = {<Home/>}/>
      <Router path="/about" element={<About/>}/>
      </Routes> 
    </div>
  )
}


export default App;
