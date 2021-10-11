
import { Link } from 'react-router-dom';

function Navbar(props){


    return (
        <nav className="navbar">
            <h3 >The db dojo blog</h3>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/">Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;