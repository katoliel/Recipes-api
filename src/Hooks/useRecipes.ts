import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY, APP_ID } from "../common/constans";
import { RecipeHit } from "../common/types";

type QueryParams = {
  app_id: string;
  app_key: string;
  q: string;
  type: string;
  diet?: string;
  health?: string;
  dietFilter?: string;
  eatingStyleFilter?: string;
};

const useRecipes = ({
  query,
  dietFilter,
  eatingStyleFilter,
}: {
  query: string;
  dietFilter: string;
  eatingStyleFilter: string;
}) => {
  const [recipes, setRecipes] = useState<RecipeHit[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
    const params: QueryParams = {
      app_id: APP_ID,
      app_key: API_KEY,
      q: query,
      type: "public",

      ...(dietFilter ? { diet: dietFilter } : {}),
      ...(eatingStyleFilter ? { health: eatingStyleFilter } : {}),
    };
    const queryParamsString = new URLSearchParams(params).toString();

    try {
      const url = `https://api.edamam.com/api/recipes/v2?${queryParamsString}`;
      const response = await axios.get(url);

      setRecipes(response.data.hits);
      setLoading(false);
    } catch (error) {
      setRecipes([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [dietFilter, eatingStyleFilter, query]);

  return { recipes, recipesLoading: loading };
};

export default useRecipes;
