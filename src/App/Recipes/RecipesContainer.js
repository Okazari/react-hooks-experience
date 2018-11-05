import Recipes from './Recipes'
import { withStateHandlers } from 'recompose'

export default withStateHandlers(
	{
		recipes: []
	},
	{
		onDeleteRecipe: ({ recipes }) => id => {
			console.log(id)
			return {
				recipes: recipes.filter(r => r.id !== id)
			}
		},
		onAddRecipe: ({ recipes }) => recipe => {
			recipe.ingredients = recipe.ingredients.reduce((carry, item) => {
				if (carry.indexOf(item) !== -1) return carry
				return [...carry, item]
			}, [])
			return {
				recipes: [...recipes, recipe]
			}
		}
	}
)(Recipes)
