const Navbar = () => {
    return (
        <nav className="header">
            <div className="header__logo">
                Blog
            </div>
            <div className="header__links">
                <a href="/">Home</a>
                <a href="/create">New Blog +</a>
            </div>
        </nav>
    );
}
 
export default Navbar;