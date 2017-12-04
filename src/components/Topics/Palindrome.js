import React, { Component } from 'react';

 class Palindrome extends Component {
    constructor(){
      super()
      this.state = {
        userInput: '',
        palindrome: ''
      };
    }
    updateValue(val){
      this.setState({userInput: val})
    }
    solveProblem(str){
      if(str === (str.split('').reverse().join(''))){
        this.setState({palindrome: true})
      }else{ this.setState({ palindrome: false})
      }
    }
    
    
  

 render(){
     return(
    <div className="puzzleBox filterString PB">
    <h4> Is it a Palindrome?</h4>
      <input className="inputLine" onChange={ (e) => this.updateValue(e.target.value)}></input>
      <button className="confirmationButton" onClick={ () => this.solveProblem(this.state.userInput)}>Is it a Palindrome?</button>
      <span className="resultsBox">Palindrome: {JSON.stringify(this.state.palindrome)}</span>
    </div>
     )
  }   
}

 export default Palindrome;