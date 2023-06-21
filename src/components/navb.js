import React from 'react';
import {
  Link
} from "react-router-dom";

function Navb(props){

    return (
        <>
<nav className={`navbar navbar-expand-lg bg-body-tertiary bg-${props.mode}`} style={{padding:"1vw 2vw 1vw 2vw" , justifyContent:"space-between"}}>
<Link className="navbar-brand" to="/" style={{color:`${props.mode==="light"?"black":"white"}`}}>{props.title}</Link>
  <div  style={{ zIndex:"99" }}>
    <ul className="navbar-nav mr-auto" >
      <li class="nav-item">
      <Link className="nav-link" to="/about">About</Link>
      </li>
    </ul>
  </div>
</nav>
    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`} style={{position:"fixed" , bottom:"2vh" , right:"2vw" , backgroundColor:`${props.mode==='light'?'white':'#0f3a55'}` }}>
          <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">DarkMode</label>
    </div>
        </>
    );
}
export default Navb;