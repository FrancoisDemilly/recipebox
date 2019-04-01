import React, {Component} from 'react';
import './create-updateRecipe.css';


class UpdateRecipe extends Component {

  constructor(){
    super();

    this.closeWindow = this.closeWindow.bind(this);
    this.updateOneRecipe = this.updateOneRecipe.bind(this);
  }//end of constructor


//closing thild from the parent
closeWindow(){
  //const num = Object.keys(this.info)
  this.props.closeModifyRecipe();
  }


updateOneRecipe(e){
e.preventDefault();
//const index = this.props.index;
const updatedRecipe = {
  title: this.title.value,
  ingredients: this.ingredients.value
}
  this.props.updateRecipe(updatedRecipe)

  this.props.closeModifyRecipe();


}



render(){
  const modal = this.props.openToMod
  const info = this.props.info;
  const recipes =  this.props.recipes
  const recipe = recipes[info]
  if(modal === true){
  return (
    <div className="backdrop">
      <div className="modal">
      <ul >
        <form  onSubmit={(e) => this.updateOneRecipe(e)} index={info}>
          <div className='textbox'>
            <li><textarea ref={(input) => this.title = input}
                     type="text" defaultValue={recipe.title}/></li>
            <li><textarea ref={(input) => this.ingredients = input}
                     type="text" defaultValue={recipe.ingredients}/></li>
          </div>
          <div className='buttonWrapper'>
            <li><button type="submit">Update</button></li>
            <li><button onClick={this.closeWindow}>Close</button></li>
          </div>
        </form>
      </ul>
      </div>
    </div>
    )
}else{
return(<div></div>)
}
}//end of render



}// end of class


export default UpdateRecipe;
