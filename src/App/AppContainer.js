import App from './App'
import uuid from 'uuid'
import React, { useState, useCallback } from 'react'

const AppContainer = () => {
  const [recipes, setRecipes] = useState([])

  const onDeleteRecipe = useCallback(recipeId => setRecipes(recipes.filter(r => r.id !== recipeId)), [recipes])
  const onAddRecipe = useCallback(newRecipe => setRecipes([...recipes, { ...newRecipe, id: uuid() }]), [recipes])

  return (
    <App 
      onDeleteRecipe={onDeleteRecipe} 
      onAddRecipe={onAddRecipe} 
      recipes={recipes} 
    />
  )
}

export default AppContainer