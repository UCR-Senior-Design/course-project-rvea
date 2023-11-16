import './Navbar.css';
import {Link} from 'react-router-dom';
import banner from '../images/ucr-banner.png'

function Navbar() {
    return(
        <header className='navbar-container'>
            <a href='#'>
                <img className='logo' src={banner} alt="ucr-banner"></img>
            </a>
            
            <nav>
                <ul className='nav-list'>
                    <Link to='/'>Login</Link>
                    <li>Job Listings</li>
                    <li>Recommended Jobs</li>
                    <li>Applied Jobs</li>
                    <li>Profile</li>
                </ul>
            </nav>

            <div className='right-nav'>
                <h2>Current User</h2>
                <button className='signout'>Sign Out</button>
            </div>
            
        </header>
    )
}

export default Navbar;