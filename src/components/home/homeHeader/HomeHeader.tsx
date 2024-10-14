import './homeHeader.css';
import MainButton from '../../shared/mainButton/MainButton';


interface HomeHeaderProps{
    handleClick: ()=>void;
}

/**
 * Renders the header section of the home page.
 * @param {Object} props - Component properties.
 * @param {function} props.handleClick - Function to handle navigation or button click.
 * @returns {JSX.Element} - The rendered header of the home page.
 */
const HomeHeader:React.FC<HomeHeaderProps> = ({handleClick}) => {
    return (
        <header id="homeHeader">
            <h1>Great coffee made simple.</h1>
            <p className='mainText'>Start your mornings with the world’s best coffees.
                Try our expertly curated artisan coffees from our
                best roasters delivered directly to your door,
                at your schedule.
            </p>
            <MainButton value='Create your plan' handleClick={handleClick} />
        </header>
    )
}
export default HomeHeader;