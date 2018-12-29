import React, { Component } from 'react';
import './App.css';
import Clarifai from 'clarifai';
import 'tachyons';
import Logo from './components/Logo/Logo';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank';
import InputForm from './components/Form/InputForm';
import ImageView from './components/ImageView/ImageView';
import Signin from './components/Signin/Signin';

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
const app = new Clarifai.App({
  apiKey: '9910b2b2af664603a3db203d2844aceb'
 });
class App extends Component {
  constructor(){
    super();
    this.state={
      input:"",
      url:"",
      signedin:false
    }
  }

  onInputChange = (event) =>{
    console.log(event.target.value," ",this.state.input);
    this.setState({input:event.target.value});
  }
    
  onDetect =() =>{
    this.setState({url:this.state.input});
    app.models.predict(Clarifai.COLOR_MODEL, this.state.url).then(
    function(response) {
      console.log(response);
    },
    function(err) {
    console.log(err);
    }
  );
  }

  onSignInChange = () =>{
this.setState({signedin:true})
  }
  
  onSignOut = () =>{
    this.setState({signedin:false})
      }
      
  render() {
   
    return (
      
      <div className="App">
      <Particles className="particles"
              params={Particlesconc}
              
            />
            
{
           (this.state.signedin) ?
           <div>
       <Navigation onSignOut={this.onSignOut} />
      <Logo />
      <Rank />
      <InputForm onInputChange = { this.onInputChange}  onDetect={this.onDetect}/>
      <ImageView url={this.state.url}/></div>  : <div><Signin  onSignInChange={this.onSignInChange}/></div>
}
      </div>
    );
  }
}

export default App;
