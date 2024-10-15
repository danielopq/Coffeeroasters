import './home.css';
import Footer from '../shared/footer/Footer';
import HomeHeader from './homeHeader/HomeHeader';
import MainButton from '../shared/mainButton/MainButton';
import HomeCollection from './homeColletion/HomeCollection';
import HomeWhyChooseUs from './homeWhyChooseUs/HomeWhyChooseUs';
import PlanSteps from '../shared/planSteps/PlanSteps';
import { useNavigate } from 'react-router-dom';

/**
 * Renders the home page of the site.
 * @returns {JSX.Element} The home page component.
 */
const Home: React.FC = () => {

    const navigate = useNavigate();

    /**
     * Navigates to the specified path.
     * @param {string} route - The path to navigate to.
     */
    const handleClick = (route: string): void => {
        navigate(route);
    };

    return (
        <main id="home">
            <HomeHeader handleClick={() => handleClick('/subscribe')} />
            <HomeCollection />
            <HomeWhyChooseUs />
            <div id="homeHowItWorks">
                <h4>How it works?</h4>
                <PlanSteps fontColor='dark' />
                <MainButton value={'Create your plan'} handleClick={() => handleClick('/subscribe')} />
            </div>
            <Footer />
        </main>
    )
}
export default Home;