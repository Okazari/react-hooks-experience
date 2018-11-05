import React from 'react'

const Recipes = ({ recipes }) => (
  <div>
    {recipes.map((recipe) => <p key={recipe.name}>{JSON.stringify(recipe)}</p>)}
  </div>
)

export default Recipes
