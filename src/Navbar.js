import { Link } from 'react-router-dom';

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Workout Web</h1>
            <div className="links">
                <a href = "/">Home</a>
                <a href = "/login" style = {{
                    color : 'white', 
                    backgroundColor : '#f1356d',
                    borderRadius : '8px'
                }}>Login</a>
            </div>
        </nav>
    );
}
 
export default Navbar;