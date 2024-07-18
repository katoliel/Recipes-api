interface RecipeLabelsProps {
  cuisineType: string[];
  calories: number;
  dietLabels: string[];
}

const RecipeLabels = ({
  cuisineType,
  calories,
  dietLabels,
}: RecipeLabelsProps) => {
  return (
    <div className="recipecontent">
      <p>
        <strong>Cuisine Type:</strong> {cuisineType}
      </p>
      <p>
        <strong>Calories:</strong> {Math.round(calories)}
      </p>
      <p>
        <strong>Diet: </strong>
        {dietLabels.join(", ")}
      </p>
    </div>
  );
};

export default RecipeLabels;
