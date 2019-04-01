import React, { Component } from 'react';
import './App.css';
import CreateRecipe from './CreateRecipe';
import DisplayRecipes from './DisplayRecipes';
import UpdateRecipe from './UpdateRecipe';
import base from './base';

class App extends Component {
  constructor(){
    super();
    this.state = {
      recipes: {},
      openToMod: false,
      info: "",
    }//end of state

    this.addRecipe = this.addRecipe.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
    this.modifyRecipe = this.modifyRecipe.bind(this);
    this.updateRecipe = this.updateRecipe.bind(this);
    this.closeModifyRecipe = this.closeModifyRecipe.bind(this);


  }//end of constructor

//lecture 18
  componentWillMount(){
    console.log('componentWillMount', this.state.recipes)
    this.ref = base.syncState(`recipes`
    , {
      context: this,
      state: 'recipes'
    })
  }

  componentWillUnmount(){
    base.removeBinding(this.ref)
  }


  addRecipe(recipe){
    //update our state
    const recipes = {...this.state.recipes};
    //add in our new fish
    const timeStamp = Date.now();
    recipes[`recipe-${timeStamp}`] = recipe;
    //set state
    this.setState({recipes: recipes});
  }


  deleteRecipe(index){
    const recipes = {...this.state.recipes};
    recipes[index] = null;
    this.setState({recipes});

  }


  modifyRecipe(index){
    console.log(index)
    this.setState({openToMod: true});
    this.setState({info: index})
  }



  //updating infor witht he new information of the recipe

  updateRecipe(updatedRecipe){
    //added the updated recipe as a new one with a new key(timestamp)
   const recipes = {...this.state.recipes};

   recipes[this.state.info] = updatedRecipe;

   this.setState({recipes})

   this.setState({openToMod: false})

   this.setState({info: null})

  }

  closeModifyRecipe(){
    this.setState({openToMod: false})
    this.setState({info: null})
  }


  render() {
    return (
      <div>
        <header className="header">
          <div className='title'><h1>Recipe Box</h1></div>
          <div className='img'></div>
        </header>
        <main>
          <CreateRecipe addRecipe={this.addRecipe} />
          <div className="recipesContainer">
            {Object.keys(this.state.recipes)
              .map(key => <DisplayRecipes  key={key} index={key} details={this.state.recipes[key]}
                deleteRecipe={this.deleteRecipe}
                modifyRecipe={this.modifyRecipe}
                 />)}
          </div>
          <UpdateRecipe
            openToMod={this.state.openToMod}
            info={this.state.info}
            recipes={this.state.recipes}
            updateRecipe={this.updateRecipe}
            closeModifyRecipe={this.closeModifyRecipe}
            />
        </main>
      </div>
    );
  }
}

export default App;
