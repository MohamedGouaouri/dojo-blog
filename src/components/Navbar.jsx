
function Navbar(){
    return (
        <nav className="navbar">
            <h3 >The dojo blog</h3>
            {/* Couple of links */}
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" className="create-new">New blog</a>
            </div>
        </nav>
    );
}

export default Navbar;