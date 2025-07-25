import './App.css'
import AddRecipeForm from './components/AddRecipeForm'
import DeleteRecipeButton from './components/DeleteRecipeButton'
import RecipeList from './components/RecipeList'

function App() {

  return (
    <>
    <RecipeList />
    <AddRecipeForm />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
