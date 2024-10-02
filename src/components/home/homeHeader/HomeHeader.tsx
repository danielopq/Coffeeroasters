import './homeHeader.css';
import MainButton from '../../shared/mainButton/MainButton';
/**
 * Renders the header for the home page.
 * @returns {JSX.Element} - Header of the home page.
 */
const HomeHeader:React.FC = () => {
    return (
        <header id="homeHeader">
            <h1>Great coffee made simple.</h1>
            <p className='mainText'>Start your mornings with the world’s best coffees.
                Try our expertly curated artisan coffees from our
                best roasters delivered directly to your door,
                at your schedule.
            </p>
            <MainButton enable={true} value='Create your plan' />
        </header>
    )
}
export default HomeHeader;