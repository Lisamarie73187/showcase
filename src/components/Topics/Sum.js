import React, { Component } from 'react';

 class Sum extends Component {
    constructor(){
      super()
      this.state ={
        number1: 0,
        number2: 0,
        sum: 0
      }
    }

    updateInput1(val){
      this.setState ({number1: parseInt(val,10)})
    }
    updateInput2(val){
      this.setState ({number2: parseInt(val,10)})
    }
    add(number1,number2){
      this.setState ({sum: number1 + number2})
    }
    


 render(){
     return(
       
    <div className="puzzleBox sumPB">
    <h4>Sum</h4>
    <input className="inputLine" onChange={(e) => (this.updateInput1(e.target.value))}></input>
    <input className="inputLine" onChange={ (e) => (this.updateInput2 (e.target.value))}></input>
    <button className="confirmationButton" onClick={ () => this.add(this.state.number1,this.state.number2)}></button>
    <span className="resultsBox">{JSON.stringify(this.state.sum)}</span>
    </div>


     );
  }   
}

 export default Sum;