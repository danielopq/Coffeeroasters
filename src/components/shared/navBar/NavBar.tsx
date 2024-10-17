import { useNavigate } from 'react-router-dom';
import './navBar.css';
import { useEffect, useRef, useState } from 'react';
/**
 * Renders the main navigation bar of the website.
 * @returns {JSX.Element} - The main navigation bar component.
 */
const NavBar: React.FC = () => {

    const refIcon = useRef<HTMLButtonElement>(null);
    const navigate = useNavigate();
    const [mobileMenuVisible, setMobileMenuVisible] = useState<boolean>(false);

    useEffect(() => {
        mobileMenuVisible ? document.body.style.position = 'fixed' : document.body.style.position = '';
        if (refIcon.current) {
            refIcon.current.className === 'showBurgerIcon' ? refIcon.current.className = 'showCloseIcon' : refIcon.current.className = 'showBurgerIcon';
        }

    }, [mobileMenuVisible])

    /**
     * Navigates to the specified path.
     * @param {string} route - The path to navigate to.
     */
    const navigateTo = (route: string): void => {
        navigate(route);
        setMobileMenuVisible(false);
    };

    const displayMobileMenu = (): void => {
        setMobileMenuVisible(!mobileMenuVisible);
    }

    return (
        <>
            <nav id="mainNavBar">
                <div id="mainNavBarLinks">
                    <button onClick={() => navigateTo('/')}>HOME</button>
                    <button onClick={() => navigateTo('/aboutus')}>ABOUT US</button>
                    <button onClick={() => navigateTo('/subscribe')}>CREATE YOUR PLAN</button>
                </div>
                <button ref={refIcon} id="menuMobileIcon" className='showBurgerIcon' onClick={displayMobileMenu}></button>
            </nav>
            <menu id="mobileMenu" className={mobileMenuVisible ? 'mobileMenuDisplayed' : 'mobileMenuHidden'}>
                <button onClick={() => navigateTo('/')}>HOME</button>
                <button onClick={() => navigateTo('/aboutus')}>ABOUT US</button>
                <button onClick={() => navigateTo('/subscribe')}>CREATE YOUR PLAN</button>
            </menu>
        </>

    )
}
export default NavBar;