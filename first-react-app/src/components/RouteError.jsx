import { useRouteError } from "react-router-dom";

function RouteError() {
  const routeErr = useRouteError();
  // console.log(routeErr)

  return (
    <div
      className="bg-dark text-warning d-flex justify-content-center align-items-center flex-column"
      style={{ minHeight: "100vh" }}
    >
      <p className="display-4">{routeErr.data}</p>
      <p className="display-5 text-danger">
        {routeErr.status} - {routeErr.statusText}
      </p>
    </div>
  );
}

export default RouteError;
