import Compozer from './Compozer'
import { withStateHandlers, compose, withProps } from 'recompose'
import groupBy from 'lodash/groupBy'
import ingredients from './ingredients'

export default compose(
  withStateHandlers(
    {
      ingredients,
      name: '',
      newRecipe: []
    },
    {
      onIngredientClick: ({ newRecipe }) => ingredient => ({ newRecipe: [...newRecipe, ingredient] }),
      onNameChange: () => name => ({ name }),
      onAddRecipe: ({ name, newRecipe }, { onAddRecipe }) => () => onAddRecipe({ name, ingredients: newRecipe }) || ({ name: '', newRecipe: [] }),
      onCancel: () => () => ({ name: '', newRecipe: [] }),
    }
  ),
  withProps(({ ingredients }) => ({ ingredientsByType: groupBy(ingredients, 'type') }))
)(Compozer)