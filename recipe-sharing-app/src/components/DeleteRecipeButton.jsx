import {useRecipeStore} from './useRecipeStore';
import {useState} from 'react';
import {useNavigation} from 'react-router-dom';


const DeleteRecipeButton = ({recipeId}) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
const [isDeleting, setIsDeleting] = useState(false);
const navigate = useNavigation(
    () => {
      if (isDeleting) {
        return;
      }
      setIsDeleting(true);
      deleteRecipe(recipeId);
      navigate('/'); // Redirect to the home page after deletion
    }
); // This is incorrect, see below

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