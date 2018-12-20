import React from 'react';
import './InputForm.css';

const InputForm = () =>{
    return(
        <div className="center w-60">
        <div className=" center formb pa4 br3 shadow-5">
                <input className="f4 pa1  w-70 center" type="text"  />
                <button className="w-30 grow  link ph3 pv2 dib white bg-light-purple pointer">Detect</button>
            </div>
         </div>   
    )
}

export default InputForm;
