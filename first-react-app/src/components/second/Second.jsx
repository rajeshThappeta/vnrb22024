import img1 from "../../assets/1.jpeg";
import img2 from "../../assets/2.jpeg";
import { FcDislike } from "react-icons/fc";
import { PiSignInBold } from "react-icons/pi";

function Second() {
  return (
    <div className="text-center">
      <h1 className="display-1 text-info">Second component</h1>
      <button className="btn btn-warning">
       
        <PiSignInBold className="text-white fs-2 me-2" />
        Signup
      </button>
      <br />

      <img
        src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80"
        width="400px"
        alt=""
      />
      <br />
      <img src={img1} alt="" />
      <br />
      <img src={img2} alt="" />
      <br />

      <FcDislike className="display-1" />
    </div>
  );
}

export default Second;
