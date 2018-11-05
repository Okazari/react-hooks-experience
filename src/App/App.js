import React from 'react'
import Recipes from './Recipes'
import Compozer from './Compozer'

const App = ({ recipes, onDeleteRecipe, onAddRecipe }) => (
  <div>
    <Recipes recipes={recipes} onDeleteRecipe={onDeleteRecipe}/>
    <Compozer onAddRecipe={onAddRecipe} />
  </div>
)

export default App