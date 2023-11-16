import './Error404.css';
import {Link} from 'react-router-dom';

function Error404() {
    return(
        <>
            <h1>ERROR 404 | PAGE DOES NOT EXIST</h1>
            <div className='link-container'>
                <p>Here's some helpful links:</p>
                <ul className='nav-links'>
                    <li><Link to='/'>Login</Link></li>
                    <li><Link to='/student'>Dashboard</Link></li>
                </ul>
            </div>

            
            {/* For dashboard, check what they're logged in as, adn redirect as needed*/}
        </>
        
    )
}

export default Error404;