import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="App" id="error-page">
      <div className="App-header">
        <h1>Oops!</h1>
        <p>Ha ocurrido un error, página no encontrada.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}