import React from 'react'

const Recipe = ({ id, name, onDeleteRecipe, ingredients = [] }) => (
    <li>
      <strong>
        {name} <button onClick={() => onDeleteRecipe(id)}>x</button>
      </strong>
      <div>
        {ingredients.map(i => i.name).join(', ')}
      </div>
    </li>
)

export default Recipe