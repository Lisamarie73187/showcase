import React, { Component } from 'react';

 class FilterObject extends Component {
    constructor(){
      super()
      this.state={
        animals: [
          {
            species: 'Dog',
            breed: 'German Shepherd',
            name: 'Maya',
            age: 2
           },
          {
            species: 'Cat',
            color: 'Black',
            favoriteToy: 'feather'
          },
          { 
            species: 'Fish',
            type: 'Clown Fish',
            name: 'Oscar'
          }
        ],
        userInput: [],
        filteredArray: []

      }
    }
    changeInput(val){
      this.setState({ userInput:val})
    }
    solveProblem(key){
      var arr = this.state.animals;
      var filteredAnimals = [];

      for( var i = 0; i < arr.length; i++){
        if( arr[i].hasOwnProperty(key)){
          filteredAnimals.push(arr[i]);
        }

      }
      this.setState({ filteredArray: filteredAnimals})




    }
    




 render(){
   
     return(

    <div className="puzzleBox filterObjectPB">
      <h4>Filter Object</h4>
      <span className="puzzzleText">{JSON.stringify(this.state.animals)}</span><br/><br/>
      <input className="inputLine" onChange={(e) => this.changeInput(e.target.value)}></input>
      <button className="confirmationButton" onClick={() => {this.solveProblem(this.state.userInput)} }>Filter</button><br/>
      <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
    </div>

     )
  }   
}

 export default FilterObject;