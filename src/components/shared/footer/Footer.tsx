import { useNavigate } from 'react-router-dom';
import './footer.css';

/**
 * Renders the footer of the website.
 * @returns {JSX.Element} The website footer component.
 */
const Footer: React.FC = () => {
    const navigate = useNavigate();

    /**
     * Navigates to the specified path.
     * @param {string} route - The path to navigate to.
     */
    const handleClick = (route: string): void => {
        navigate(route);
    };

    return (
        <footer>
            <div id="footerLinks">
                <button onClick={() => handleClick('/')} aria-label="Home">HOME</button>
                <button onClick={() => handleClick('/aboutus')} aria-label="About us">ABOUT US</button>
                <button onClick={() => handleClick('/subscribe')} aria-label="Create your plan">CREATE YOUR PLAN</button>
            </div>
            <div id="footerSocialMedia">
                <div id="facebook" className='socialMediaIcon' aria-label="facebook"></div>
                <div id="twitter" className='socialMediaIcon' aria-label="twitter"></div>
                <div id="instagram" className='socialMediaIcon' aria-label="instagram"></div>
            </div>
        </footer>
    )
}

export default Footer;