
function Navbar(props){


    return (
        <nav className="navbar">
            <h3 >The dojo blog</h3>
            {/* Couple of links */}
            <div className="links">
                <a href="/">Home</a>
                <button className="create-new">New blog</button>
            </div>
        </nav>
    );
}

export default Navbar;