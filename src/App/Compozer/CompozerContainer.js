import React, { useState } from 'react'
import Compozer from './Compozer'
import groupBy from 'lodash/groupBy'
import ingredients from './ingredients'

const CompozerContainer = ({ onAddRecipe }) => {
  const [name, setName] = useState('')
  const [newRecipe, setNewRecipe] = useState([])

  const onIngredientClick = ingredient => setNewRecipe([...newRecipe, ingredient])
  const _onAddRecipe = () => {
    onAddRecipe({ name, ingredients: newRecipe })
    setName('')
    setNewRecipe([])
  }
  const onCancel = () => {
    setName('')
    setNewRecipe([])
  }

  const ingredientsByType = groupBy(ingredients, 'type')

  return (
    <Compozer
      name={name}
      newRecipe={newRecipe}
      ingredientsByType={ingredientsByType}
      onIngredientClick={onIngredientClick} 
      onNameChange={setName}
      onAddRecipe={_onAddRecipe}
      onCancel={onCancel}
    />
  )
}

export default CompozerContainer