import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>Oh no, this route doesn't exist!</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">You can go back to the home page by clicking here, though!</Link>
    </div>
  );
};

export default ErrorPage;
