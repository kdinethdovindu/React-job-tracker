import { Link } from "react-router";

function NotFound() {
  return (
    <main className="not-found">
      <h1>404</h1>

      <h2>Page Not Found</h2>

      <p>
        The page you're looking for does
        not exist.
      </p>

      <Link
        className="button-link"
        to="/"
      >
        Back to Dashboard
      </Link>
    </main>
  );
}

export default NotFound;