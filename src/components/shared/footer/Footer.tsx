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
                <button onClick={() => handleClick('/')}>HOME</button>
                <button onClick={() => handleClick('/aboutus')}>ABOUT US</button>
                <button onClick={() => handleClick('/subscribe')}>CREATE YOUR PLAN</button>
            </div>
            <div id="footerSocialMedia">
                <div id="facebook" className='socialMediaIcon'></div>
                <div id="twitter" className='socialMediaIcon'></div>
                <div id="instagram" className='socialMediaIcon'></div>
            </div>
        </footer>
    )
}

export default Footer;