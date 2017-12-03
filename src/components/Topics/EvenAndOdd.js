import React, { Component } from 'react';

 class EvenAndOdd extends Component {
     constructor(){
         super()
         this.state = {
             evenArray: [],
             oddArray: [],
             userInput: '',
         }
     }
        findEvenAndOdds(){
           
            })
        }
    
 render(){
     return(
        <div ClassName="puzzleBox evenAndOddPB">
            <h4>Evens and Odds</h4>
            <input className="inputLIne" onChange={event => this.userInput(event.target.value)
            }value={this.state.userInput}/>
            <button className="confirmationButton" onClick={() => this.findEvenAndOdds()}></button>
            <span className="resultsBox"/>
            <span className="resultBox"/>
        </div>
     )
  }   
}

 export default EvenAndOdd;