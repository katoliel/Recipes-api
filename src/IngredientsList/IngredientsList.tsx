import React from "react";

interface IngredientsListProps {
  ingredientLines: string[];
}

const IngredientsList: React.FC<IngredientsListProps> = ({
  ingredientLines,
}) => {
  return (
    <ul>
      {ingredientLines.map((line, index) => (
        <li key={index}>{line}</li>
      ))}
    </ul>
  );
};

export default IngredientsList;
