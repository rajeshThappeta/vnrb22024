function Eventdemo() {
    
  function handleClick() {
    console.log("function called");
  }

  function handleClickAgain(a) {
    console.log("another event occuurred and a is ", a);
  }

  return (
    <div>
      <h1>Event Demo</h1>
      <button className="btn btn-success" onClick={handleClick}>
        Click-1
      </button>

      <button
        className="btn btn-warning mt-5"
        onClick={() => handleClickAgain(10)}
      >
        Click-2
      </button>
    </div>
  );
}

export default Eventdemo;




