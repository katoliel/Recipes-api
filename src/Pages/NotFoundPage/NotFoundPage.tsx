import { Link } from "react-router-dom";
import Headings from "../../Headings";

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <Headings level={1}>404 Not Found</Headings>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFoundPage;
