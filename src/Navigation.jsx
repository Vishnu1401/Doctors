import React from "react";
import { Link } from "react-router-dom";


function Navigation(){
    return(
       <div className="navbar">
        <a href='#' id='logo'> True Care +</a>
        <Link to='/'>Home</Link>
        <Link to='/doctor'>Doctor</Link>
        <Link to='/patient'>Patient</Link>
       </div>
    )
}
export default Navigation;