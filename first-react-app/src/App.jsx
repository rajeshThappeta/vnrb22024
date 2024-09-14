import './App.css';
import EffectDemo from './components/EffectDemo';
import EffectDemo2 from './components/EffectDemo2';
import Eventdemo from './components/Eventdemo';
import First from './components/first/First';
import FormDemo1 from './components/FormDemo1';
import Products from './components/Products';

import Second from './components/second/Second';
import StateChangeDemo from './components/StateChangeDemo';

function App() {
  //business logic
  //return react element
  return (
    <div className='container '>
      {/*nest EventDemo component  */}
      <FormDemo1 />
      {/* <First /> */}
    </div>
  );
}

export default App;
