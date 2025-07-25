import {useRecipeStore} from './useRecipeStore';
import {useState} from 'react';

const DeleteRecipeButton = ({recipeId}) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    deleteRecipe(recipeId);
    setIsDeleting(false);
  };

  return (
    <button onClick={handleDelete} disabled={isDeleting}>
      {isDeleting ? 'Deleting...' : 'Delete Recipe'}
    </button>
  );
}   
export default DeleteRecipeButton;