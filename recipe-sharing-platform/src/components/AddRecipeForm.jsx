import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({}); // plural

  // validate function
  const validate = () => {
    const newErrors = {};

    if (!title) {
      newErrors.title = "Title is required.";
    }
    if (!ingredients) {
      newErrors.ingredients = "Ingredients are required.";
    } else {
      const ingredientList = ingredients.split(",").map(item => item.trim());
      if (ingredientList.length < 2) {
        newErrors.ingredients = "Please include at least two ingredients.";
      }
    }
    if (!steps) {
      newErrors.steps = "Preparation steps are required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log({
      title,
      ingredients: ingredients.split(",").map(item => item.trim()),
      steps
    });

    // Clear form
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded shadow mt-10">
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Recipe Title"
          className="w-full p-2 border rounded"
        />
        {errors.title && <p className="text-red-500">{errors.title}</p>}

        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Ingredients (comma separated)"
          className="w-full p-2 border rounded"
          rows="3"
        ></textarea>
        {errors.ingredients && <p className="text-red-500">{errors.ingredients}</p>}

        <textarea
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          placeholder="Preparation Steps"
          className="w-full p-2 border rounded"
          rows="5"
        ></textarea>
        {errors.steps && <p className="text-red-500">{errors.steps}</p>}

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
