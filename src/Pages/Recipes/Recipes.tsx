import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import WebsiteLogo from "../../WebsiteLogo/WebsiteLogo";
import RecipeImage from "../../RecipeImage/RecipeImage";
import SearchForm from "../../SearchForm/SearchForm";
import { DietOptions } from "../../common/types";
import RecipeLabels from "../../RecipeLabels";
import Headings from "../../Headings";
import ThemeSwitch from "../../ThemeSwitch/ThemeSwitch";
import useRecipes from "../../Hooks/useRecipes";
import { RecipeHit } from "../../common/types";

const Recipes: React.FC<RecipeHit> = () => {
  const [inputQuery, setInputQuery] = useState("");
  const [query, setQuery] = useState("chicken");
  const [dietFilter, setDietFilter] = useState("");
  const [eatingStyleFilter, setEastingStyleFilter] = useState("");
  const { recipes, recipesLoading } = useRecipes({
    query,
    dietFilter,
    eatingStyleFilter,
  });

  const dietOptions: DietOptions = [
    "",
    "balanced",
    "high-protein",
    "low-fat",
    "low-carb",
    "low-sodium",
    "high-fiber",
  ];

  const eatingOptions = [
    "",
    "diary-free",
    "egg-free",
    "keto-friendly",
    "kosher",
    "low-sugar",
    "paleo",
    "Mediterranean",
    "Pescatarian",
    "vegetarian",
    "vegan",
  ];

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setQuery(inputQuery);
  };

  const handleEatingStyleChange = (style: string) => {
    setEastingStyleFilter(style);
  };

  return (
    <>
      <ThemeSwitch />
      <WebsiteLogo />
      <SearchForm
        handleSubmit={handleSubmit}
        handleSearchChange={handleSearchChange}
        handleDietChange={(diet: string) => setDietFilter(diet)}
        handleEatingStyleChange={handleEatingStyleChange}
        dietOptions={dietOptions}
        eatingOptions={eatingOptions}
        inputQuery={inputQuery}
      />
      <ul className="recipes">
        {recipesLoading && "Loading.."}

        {recipes.map((recipeHit, index) => {
          const { recipe } = recipeHit;
          const id = encodeURIComponent(recipe.uri.split("#recipe_")[1]);
          return (
            <li key={index} className="recipe">
              <Link to={`/recipe/${id}`}>
                <RecipeImage
                  image={{
                    src: recipe.image,
                    alt: recipe.label,
                  }}
                />
                <div className="recipecontent">
                  <Headings level={3}>{recipe.label}</Headings>
                </div>
              </Link>
              <RecipeLabels
                calories={recipe.calories}
                cuisineType={recipe.cuisineType}
                dietLabels={recipe.dietLabels}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Recipes;
