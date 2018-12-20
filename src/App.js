import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import Logo from './components/Logo/Logo';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank';
import InputForm from './components/Form/InputForm';

const Particlesconc ={
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 5,
      },
      number:{
        value:100,
        density:{
          enable:true,
          value_area:800
        }
      }
    }
  }
}
class App extends Component {
  
  render() {
    return (
      
      <div className="App">
      <Particles className="particles"
              params={Particlesconc}
              
            />
      <Navigation />
      <Logo />
      <Rank />
      <InputForm />
      {/* <ImageView />      */}

      </div>
    );
  }
}

export default App;
