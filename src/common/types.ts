export interface Recipe {
  label: string;
  image: string;
  ingredientLines: string[];
  calories: number;
  cuisineType: string[];
  dishType: string[];
  dietLabels: string[];
  healthLabels: string[];
  uri: string;
}
export interface RecipeHit {
  recipe: Recipe;
}

export type DietOptions = string[];

export type EatingOptions = string[];

export type Image = {
  src?: string;
  alt?: string;
};
