import React from 'react'
import Recipe from './Recipe'

const Recipes = ({ recipes = [], onDeleteRecipe }) => (
  <div>
    My recipes
    <ul>
    {
      recipes.map(r => <Recipe key={r.id} {...r} onDeleteRecipe={onDeleteRecipe}/>)
    }
    </ul>
  </div>
)

export default Recipes

