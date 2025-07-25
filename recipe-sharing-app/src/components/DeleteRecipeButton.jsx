import { useRecipeStore } from './recipeStore'; // Update this path if your store file is named differently
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate(); //for redirection

  const handleDelete = () => {
    setIsDeleting(true);
    deleteRecipe(recipeId);
    setIsDeleting(false);
    navigate('/'); //redirect to homepage after deleting
  };

  return (
    <button onClick={handleDelete} disabled={isDeleting}>
      {isDeleting ? 'Deleting...' : 'Delete Recipe'}
    </button>
  );
};

export default DeleteRecipeButton;
