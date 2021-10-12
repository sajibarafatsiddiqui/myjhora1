import logo from './logo.svg';
import './App.css';
import Faker from 'faker';
import Comments from './Comment';
import AproveCard from './AproveCard';
import React from 'react';
import ReactDOM from 'react-dom';

function getTime(){return (new Date()).toLocaleTimeString()}
class App extends React.Component {
  
constructor(props){
  super(props);
  
  this.state={lat:"",long:"",err:""}
}
componentDidMount(){
  window.navigator.geolocation.getCurrentPosition(position=>this.setState({lat:position.coords.latitude,long:position.coords.latitude}),err=>this.setState(err.message));

}
render (){
  return(
  <div className="App">
  <div>
  <label htmlFor="name">Enter Name:</label>
  <input id='name'></input>
  <button style={{backgroundColor:'blue'}}>Click Me</button>
  <div>{getTime()}</div>
  <div>latitude:{this.state.lat?this.state.lat:this.state.err} and longitude:{this.state.long?this.state.long:this.state.err}</div>
  </div>
  <AproveCard>
  <Comments author="Sajib"/>
  </AproveCard>
  <AproveCard>
  <Comments author="Arafat"/>
  </AproveCard>
  <AproveCard>
  <Comments author="Siddiqui"/>
  </AproveCard>
  
  </div>
   );
}
}
export default App