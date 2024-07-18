import { Image } from "../common/types";

interface RecipeImageProps {
  image: Image;
}

const RecipeImage: React.FC<RecipeImageProps> = ({ image }) => {
  return <img src={image.src} alt={image.alt} style={{ width: "100%" }} />;
};

export default RecipeImage;
