import F from "./F";
import G from "./G";

function B() {
  return (
    <div className="text-center bg-secondary p-5">
      <h1>Component -B</h1>
      <div className="d-flex justify-content-around">
        <F />
        <G />
      </div>
    </div>
  );
}

export default B;
