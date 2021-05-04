import './Navbar.css'
import Search from '../Search/Search';

function Navbar(){
    return(
        <div id="Navbar">
            <i className="hamburger fas fa-bars"></i>
            <p id="navbarText">The Shoppies</p>
            <Search/>
        </div>
    )
}

export default Navbar;