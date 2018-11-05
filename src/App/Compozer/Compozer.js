import React from 'react'

const IngredientList = ({ name, ingredients, onIngredientClick }) => (
  <div style={{ margin: 20}}>
    <strong>
      {name}
    </strong>
    <div>
      {ingredients.map((i, index) => (
        <div key={index}>
          <button onClick={e => e.preventDefault() || onIngredientClick(i)}>+</button> {i.name}
        </div>
      ))}
    </div>
  </div>
)

const Compozer = ({ onCancel, ingredientsByType = [], name, onNameChange, onAddRecipe, newRecipe = [], onIngredientClick }) => console.log(ingredientsByType) || (
  <form>
    New recipe
    <div>
      <input
        required 
        placeholder="Pizza name" 
        onChange={e => onNameChange(e.target.value)} 
        value={name}
      />
    </div>
    <div>
      Recipe : {
        newRecipe.map(r => r.name).join(', ')
      }
    </div>
    <div style={{ display: 'flex' }}>
      {
        Object.entries(ingredientsByType).map(([type, ingredients]) => (
          <IngredientList key={type} name={type} ingredients={ingredients} onIngredientClick={onIngredientClick} />)
        )
      }
    </div>
    <input type="submit" onClick={e => e.preventDefault() || onAddRecipe()} value="Add recipe" />
    <button onClick={e => e.preventDefault() || onCancel()}>Cancel</button>
  </form>
)

export default Compozer