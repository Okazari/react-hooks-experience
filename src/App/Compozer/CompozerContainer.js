import Compozer from './Compozer'
import { withStateHandlers, compose, withProps } from 'recompose'
import groupBy from 'lodash/groupBy'

export default compose(
  withStateHandlers(
    {
      ingredients: [
        {
          type:'meat',
          name:'Boeuf'
        },
        {
          type:'meat',
          name:'Poulet'
        },
        {
          type:'meat',
          name:'Poisson'
        },
        {
          type:'meat',
          name:'Veau'
        },
        {
          type:'condiments',
          name:'Poivre'
        },
        {
          type:'condiments',
          name:'Curry'
        },
        {
          type:'condiments',
          name:'Coffe'
        },
        {
          type:'condiments',
          name:'Gingembre'
        },
      ],
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