import { Link } from "react-router-dom";

export default function navbar(){
return(
    <nav class ="navbar">
    <Link to="/">Home</Link>
    <br/>
    <Link to="/about">About</Link>
    </nav>
)
}