import App from './App'
import uuid from 'uuid'
import React, { useState } from 'react'

const AppContainer = () => {
  const [recipes, setRecipes] = useState([])

  const onDeleteRecipe = recipeId => setRecipes(recipes.filter(r => r.id !== recipeId))
  const onAddRecipe = newRecipe => setRecipes([...recipes, { ...newRecipe, id: uuid() }])

  return (
    <App 
      onDeleteRecipe={onDeleteRecipe} 
      onAddRecipe={onAddRecipe} 
      recipes={recipes} 
    />
  )
}

export default AppContainer