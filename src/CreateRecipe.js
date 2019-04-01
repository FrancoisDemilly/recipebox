import React, { Component } from 'react';
//import  './App.css';
import './create-updateRecipe.css'

//upon create button clicked, display box to create recipe
// tile of the recipe
// ingredient
// add button
// close button
class CreateRecipe extends Component {

  constructor(){
    super();
    this.state = {
      showModalWindow: false,
    }
    //adding the method to the CreateRecipe component by binding the method to "this
    this.openWindow = this.openWindow.bind(this);
    this.closeWindow = this.closeWindow.bind(this);
    this.createOneRecipe = this.createOneRecipe.bind(this);
  }

  openWindow(){
    this.setState({showModalWindow: true})
    console.log('openWindow ', this.state.showModalWindow)
  }

  closeWindow(){
    this.setState({showModalWindow: false})
    console.log('closeWindow ', this.state.showModalWindow)
  }


  createOneRecipe(event){
    event.preventDefault();

    const recipe = {
    title :this.title.value,
    ingredients : this.ingredients.value
    }
    this.props.addRecipe(recipe);

    this.recipeForm.reset();
  }





render(){
  if(this.state.showModalWindow === true){
  return (

    <div className="backdrop">
      <div className="modal">
        <ul>
          <form ref={(input) => this.recipeForm = input}
                onSubmit={(e) => this.createOneRecipe(e)}>
            <div className='textbox'>
              <li><textarea className='recTitle' ref={(input) => this.title = input}
                    type="text" placeholder="Title of the recipe" /></li>
              <li><textarea className='recIngredients'ref={(input) => this.ingredients = input}
                    type="text" placeholder="Ingredients of the recipe"/></li>
            </div>
            <div className='buttonWrapper'>
              <li><button type="submit" >Add Recipe</button></li>
              <li><button onClick={this.closeWindow}>Close</button></li>
            </div>
          </form>
        </ul>
      </div>
    </div>
    );
} else{
  return (
    <div className="wrapperCreatebutton">
      <h1 className='wrapperTitle'>Recipe Box</h1>
      <button className="createbutton" onClick={this.openWindow}>New Recipe</button>
    </div>
    )
  }
}//end of render

}

export default CreateRecipe;
