import React from 'react'
import RecipeComposer from './RecipeComposer'

const Line = ({ name, id, ingredients, onDeleteRecipe }) => (
	<div>
		<li>
			{name} - {ingredients.join(', ')}
		</li>
		<button onClick={() => onDeleteRecipe(id)}> x </button>
	</div>
)

const Recipes = ({ recipes, onDeleteRecipe, onAddRecipe }) => {
	return (
		<React.Fragment>
			<ul>
				{recipes.map(({ id, name, ingredients }) => (
					<Line key={id} name={name} ingredients={ingredients} id={id} onDeleteRecipe={onDeleteRecipe} />
				))}
			</ul>
			<RecipeComposer recipes={recipes} addRecipe={onAddRecipe} />
		</React.Fragment>
	)
}

export default Recipes
