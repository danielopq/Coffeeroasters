import './subscribeHeader.css';

/**
 * Component that renders the header for the subscribe page.
 * @returns {JSX.Element} - The header for the subscribe page.
 */
const SubscribeHeader: React.FC = () => {
    return (
        <header id="subscribeHeader">
            <h1>Create a plan</h1>
            <p className='mainText'>
                Build a subscription plan that best fits your needs.
                We offer an assortment of the best artisan coffees from
                around the globe delivered fresh to your door.
            </p>
        </header>
    )
}
export default SubscribeHeader;