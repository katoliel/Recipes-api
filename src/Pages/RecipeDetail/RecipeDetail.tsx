import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import WebsiteLogo from "../../WebsiteLogo/WebsiteLogo";
import RecipeImage from "../../RecipeImage/RecipeImage";
import Headings from "../../Headings";
import RecipeLabels from "../../RecipeLabels";
import IngredientsList from "../../IngredientsList";
import { API_KEY, APP_ID } from "../../common/constans";

interface Recipe {
  label: string;
  image: string;
  ingredientLines: string[];
  calories: number;
  cuisineType: string[];
  dietLabels: string[];
}

const RecipeDetail: React.FC<Recipe> = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);



  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await axios.get(
          `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${APP_ID}&app_key=${API_KEY}`
        );

        if (response.data && response.data.recipe) {
          setRecipe(response.data.recipe);
        } else {
          throw new Error("Recipe not found");
        }
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
          console.error("Recipe not found:", error);
          navigate("/not-found");
        } else {
          console.error("Failed to fetch recipe:", error);
          setError(
            "An error occurred while fetching the recipe. Please try again later."
          );
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipe();
  }, [id, navigate]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <WebsiteLogo />
      <div className="recipe-detail-wrapper">
        <div className="recipe-detail-container">
          <Headings level={1}>{recipe?.label}</Headings>
          <RecipeImage image={{ src: recipe?.image, alt: recipe?.label }} />
          <RecipeLabels
            cuisineType={recipe?.cuisineType || []}
            calories={recipe?.calories || 0}
            dietLabels={recipe?.dietLabels || []}
          />
          <Headings level={3}>Ingredients</Headings>
          <IngredientsList ingredientLines={recipe?.ingredientLines || []} />
          <Link to="/">Go back to HomePage</Link>
        </div>
      </div>
    </>
  );
};

export default RecipeDetail;
