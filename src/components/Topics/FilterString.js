import React, { Component } from 'react';

 class FilterString extends Component {
   constructor(){
    super()
    this.state = {
      food: ['pizza ','french fries ','chips ','almonds ','cheese '],
      userInput: '',
      filteredArray: [],
    }
   }
   updateValue(val){
    this.setState({ userInput: val})
   }    
   solveProblem(value){
    var arr = this.state.food
    var newArray = []
    for( var i = 0; i < arr.length; i++){
      if(arr[i].includes(value) ){
        newArray.push(arr[i])
      }
    }
    this.setState({filteredArray: newArray})
   }


 render(){
     return(
   <div className="puzzleBox filterStringPB">
     <h4>Filter String</h4>
     <span className="puzzleText">{JSON.stringify(this.state.food)}</span>
     <input className="inputLine" onChange={ (e) => this.updateValue(e.target.value)}></input>
     <button className="confirmationButton" onClick={ () => this.solveProblem(this.state.userInput)}>Filter Array</button>
     <span className="resultsBox filterStringRB">{JSON.stringify(this.state.filteredArray)}</span>
   </div>

     )
  }   
}

 export default FilterString;