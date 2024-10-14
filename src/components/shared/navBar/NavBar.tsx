import { useNavigate } from 'react-router-dom';
import './navBar.css';
/**
 * Renders the main navigation bar of the website.
 * @returns {JSX.Element} - The main navigation bar component.
 */
const NavBar: React.FC = () => {
    const navigate = useNavigate();

    /**
     * Navigates to the specified path.
     * @param {string} route - The path to navigate to.
     */
    const handleClick = (route: string): void => {
        navigate(route);
    };

    return (
        <nav id="mainNavBar">
            <div id="mainNavBarLinks">
                <button onClick={() => handleClick('/')}>HOME</button>
                <button onClick={() => handleClick('/aboutus')}>ABOUT US</button>
                <button onClick={() => handleClick('/subscribe')}>CREATE YOUR PLAN</button>
            </div>
        </nav>
    )
}
export default NavBar;