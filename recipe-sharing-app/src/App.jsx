import './App.css'
import AddRecipeForm from './components/AddRecipeForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RecipeList from './components/RecipeList'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/add" element={<AddRecipeForm />} />
      </Routes>
    </BrowserRouter>
    <h1>Recipe Sharing App</h1>
    </>
  )
}

export default App
