import React from 'react';
const Navigation = (props) =>{
    return(
        <p className="pa3 link dim  f3 pointer"
         style={{display:"flex",position:"absolute" ,top:"0", right:"0"}} onClick={props.onSignOut}>Sign Out</p>    )
}

export default Navigation;

