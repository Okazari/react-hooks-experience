import React, { useState, useCallback, useMemo } from 'react'
import Compozer from './Compozer'
import groupBy from 'lodash/groupBy'
import ingredients from './ingredients'

const CompozerContainer = ({ onAddRecipe }) => {
  const [name, setName] = useState('')
  const [newRecipe, setNewRecipe] = useState([])

  const onIngredientClick = useCallback(ingredient => setNewRecipe([...newRecipe, ingredient]), [newRecipe])
  const _onAddRecipe = useCallback(() => {
    onAddRecipe({ name, ingredients: newRecipe })
    setName('')
    setNewRecipe([])
  }, [name, newRecipe])
  const onCancel = useCallback(() => {
    setName('')
    setNewRecipe([])
  })

  const ingredientsByType = useMemo(() => groupBy(ingredients, 'type'), [ingredients])

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