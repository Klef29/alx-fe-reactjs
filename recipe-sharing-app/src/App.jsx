import './App.css';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>🍽️ Recipe Sharing App</h1>

      {/* Always visible sections */}
      <section style={{ padding: '20px' }}>
        <h2>🔥 Recommended Recipes</h2>
        <RecommendationsList />
      </section>

      <section style={{ padding: '20px' }}>
        <h2>❤️ Your Favorites</h2>
        <FavoritesList />
      </section>

      {/* Routes for dynamic pages */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
          <Route path="/add" element={<AddRecipeForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
