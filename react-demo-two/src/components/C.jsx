import H from './H';
import I from './I';

function C() {
  return (
    <div className="text-center bg-warning p-5">
      <h1>Component-C</h1>
      <div className="d-flex justify-content-around">
        <H />
        <I />
      </div>
    </div>
  )
}

export default C