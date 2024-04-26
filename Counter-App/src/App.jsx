import React from "react";
import './App.css';


class Counter extends React.Component{     //outside render() you have to write let

  state = {
    count : 0 , 
  }

  Inc = ()=>{
    this.setState({count: this.state.count + 1})
  }

  render(){      //inside render() you have to write let 
    let Dec = () => {
      if(this.state.count>0){
        this.setState({count: this.state.count - 1})
      }
    }

    let OG = ()=>{
      this.setState({count: this.state.count = 0})
    }

    return(
      <>

      <h1>Counter App</h1>
      <h1>{this.state.count}</h1>
      <div className='buttons_div'>
        <button onClick={this.Inc}>+</button>
        <button onClick={ Dec }>-</button>
        <button onClick={ OG }>Reset</button>
      </div>

      </>
    )




  }
}


export default Counter;