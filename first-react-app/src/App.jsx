import './App.css';
import First from './components/first/First';
import Second from './components/second/Second';

function App() {
  //business logic
  //return react element
  return (
    <div>
      {/*connect Second component  */}
      <Second />
      {/* <First /> */}
    </div>
  );
}

export default App;
