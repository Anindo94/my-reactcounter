import React from 'react';

import './App.css';


class App extends React.Component {
    constructor(){
        super();
        this.state = {
            count :0
        }
        this.handleClick = this.handleClick.bind(this);
        this.resetClick = this.resetClick.bind(this);
    }
  handleClick(){
      this.setState(prevState => {
          return {
              count : prevState.count + 1 
          }
      })
  }
   resetClick(){
      this.setState ({
          count : 0
      })
  }
  render() {
    return (
     <div className="counterBlock">
         <h1 className="heading">Simple-Counter</h1>
      <div className="countNumber">
      <h1>{this.state.count}</h1>
      </div>   
     
     <button className="button buttonChange buttonCenter" onClick = {this.handleClick}>Change!</button>
     
     <button className="button buttonChange buttonDistance" onClick = {this.resetClick}>Reset</button>
     </div> 
     
    );
  }
}

export default App;