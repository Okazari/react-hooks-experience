import App from './App'
import { withStateHandlers } from 'recompose'
import uuid from 'uuid'

export default withStateHandlers(
  { recipes: [] },
  {
    onDeleteRecipe: ({ recipes }) => recipeId => ({ recipes: recipes.filter(r => r.id !== recipeId) }),
    onAddRecipe: ({ recipes }) => newRecipe => ({ recipes: [...recipes, { ...newRecipe, id: uuid() }]})
  }
)(App)