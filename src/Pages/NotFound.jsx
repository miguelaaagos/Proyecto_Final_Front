import { Link } from "react-router-dom";
import backgroundImage from "../assets/img/404.png";

const NotFound = () => {
  return (
    <div className="container1"> 
      <div className="text-center mt-4">
        <img src={backgroundImage} alt="404" className="w-25" />
        <p>
          <Link to="/">
            <button type="button" className="btn btn-primary btn-lg btn-block">
              Ir al Inicio
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
