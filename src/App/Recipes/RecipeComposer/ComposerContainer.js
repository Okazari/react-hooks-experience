import uuid from 'uuid'
import { withStateHandlers } from 'recompose'
import Composer from './Composer'

// bad
const ingredients = {
	meats: ['tofu', 'tempeh', 'seitan', 'dahl'],
	vegetables: ['épinards', 'poire', 'pomme', 'revolte'],
	cheeses: ['bleu', 'cantal', 'st nectaire', 'gaperon'],
	condiments: ['miel', 'piment', 'sel', 'poivre']
}

const recipeBlueprint = () => {
	return {
		name: 'recipe in progress',
		id: uuid(),
		ingredients: []
	}
}

export default withStateHandlers(
	{
		ingredients,
		recipeInProgress: recipeBlueprint()
	},
	{
		onChangeName: ({ recipeInProgress }) => name => {
			return {
				recipeInProgress: {
					...recipeInProgress,
					name
				}
			}
		},
		addIngredient: ({ recipeInProgress }) => ingredient => {
			// do das shizzle the react way, like immutabilizzle
			recipeInProgress.ingredients.push(ingredient)
			return { recipeInProgress }
		},
		addRecipe: ({ recipeInProgress }, { addRecipe }) => () => {
			addRecipe(recipeInProgress)
			return {
				recipeInProgress: recipeBlueprint()
			}
		},
		cancelRecipe: ({ recipeInProgress }) => () => {
			return {
				recipeInProgress: recipeBlueprint()
			}
		}
	}
)(Composer)
