import React, { Component } from 'react';
import './DisplayRecipes.css';


class DisplayRecipes extends Component{


render(){
  const {details, index} = this.props;
  return(
      <div  className="recipeContainer">
        <div className='recipe'>
          <ul>
            <h3>Title: {details.title}</h3>
            <p><u>Ingredients:</u> {details.ingredients}</p>
          </ul>
        </div>
        <div className='buttonHolder'>
          <button className="button modifybutton" onClick={() => this.props.modifyRecipe(index)}>Modify</button>
          <button className="button deletebutton" onClick={() => this.props.deleteRecipe(index)}>Delete</button>
        </div>
      </div>
    )
  }
}

export default DisplayRecipes;
