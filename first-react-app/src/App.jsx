import './App.css';
import EffectDemo from './components/EffectDemo';
import EffectDemo2 from './components/EffectDemo2';
import Eventdemo from './components/Eventdemo';
import First from './components/first/First';
import Products from './components/Products';

import Second from './components/second/Second';
import StateChangeDemo from './components/StateChangeDemo';

function App() {
  //business logic
  //return react element
  return (
    <div className='container text-center'>
      {/*nest EventDemo component  */}
      <EffectDemo2 />
      {/* <First /> */}
    </div>
  );
}

export default App;
