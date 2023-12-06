import { Link } from 'react-router-dom';
import backgroundImage from '../assets/img/NotFound.jpeg';

const NotFound = () => {
    return (
        <div className="text-center">
            <h1>404</h1>
            <h2>Page not found</h2>
            <img src={backgroundImage} alt="404" className='w-25' />
            <p>
                <Link to="/">
                    <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block"
                > Ir al Inicio
                    </button>
                </Link>
            </p>
        </div>
    );
};

export default NotFound;