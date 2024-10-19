import A from "./components/A";
import B from "./components/B";
import C from "./components/C";

import "./App.css";

function App() {
  return (
    <div>
      <h1 className="text-info text-center display-1">Context Demo</h1>
      <div className="d-flex flex-wrap justify-content-around">
        <A />
        <B />
        <C />
      </div>
    </div>
  );
}

export default App;
