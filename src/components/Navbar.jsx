
import { Link } from 'react-router-dom';

function Navbar(props){


    return (
        <nav className="navbar">
            <h3 >The dojo blog</h3>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" class="create-new">New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;