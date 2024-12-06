import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container mx-auto text-center py-20">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="bg-blue-500 text-white py-2 px-4 rounded">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
