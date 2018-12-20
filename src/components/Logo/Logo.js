import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import logo from './logo.png'
const Logo = () =>{
    return(
        <div className="ma4 mt0 tile">
            <Tilt className="Tilt shadow-5 br2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                 <div className="Tilt-inner"> <img src={logo} /></div>
            </Tilt>
           </div> 
    )
}

export default Logo;