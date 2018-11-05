import React from 'react'

const Cat = ({ ingredientList, addIngredient }) => (
	<ul>
		{ingredientList.map(ingredient => (
			<li>
				{ingredient} <button onClick={() => addIngredient(ingredient)}>add</button>
			</li>
		))}
	</ul>
)
const Ingredients = ({ ingredients, recipeInProgress, addIngredient }) => {
	return (
		<div>
			<Cat ingredientList={ingredients['meats']} addIngredient={addIngredient} />
			<Cat ingredientList={ingredients['vegetables']} addIngredient={addIngredient} />
			<Cat ingredientList={ingredients['cheeses']} addIngredient={addIngredient} />
			<Cat ingredientList={ingredients['condiments']} addIngredient={addIngredient} />
			<h3>Selected Ingredients</h3>
			<ul>
				{recipeInProgress.ingredients
					.reduce((carry, item) => {
						if (carry.indexOf(item) !== -1) return carry
						return [...carry, item]
					}, [])
					.map(item => (
						<li>{item}</li>
					))}
			</ul>
		</div>
	)
}

const Composer = ({ recipes, ingredients, recipeInProgress, onChangeName, addRecipe, addIngredient, cancelRecipe }) => (
	<React.Fragment>
		<input value={recipeInProgress.name} onChange={e => onChangeName(e.target.value)} />
		<Ingredients ingredients={ingredients} recipeInProgress={recipeInProgress} addIngredient={addIngredient} />
		<button onClick={() => addRecipe()}>Save gamin</button>
		<button onClick={() => cancelRecipe()}> cancel</button>
	</React.Fragment>
)

export default Composer
