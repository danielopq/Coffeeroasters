import './homeWhyChooseUs.css';

/**
 * Functional component that renders the "Why choose us" section on the home page. 
 * @returns {JSX.Element} - The "Why choose us" section.
 */
const HomeWhyChooseUs = () => {
    return (
        <>
            <div id="homeWhyChooseUs">
                <h2>Why choose us?</h2>
                <p className="mainText">A large part of our role is choosing which particular 
                    coffees will be featured in our range. This means working
                    closely with the best coffee growers to give you a more
                    impactful experience on every level.
                </p>
            </div>
            <div id="homeReasons">
                <div className="reason">
                    <div id="coffeeBean-icon" className="reasonPic"></div>
                    <h4>Best quality</h4>
                    <p className="mainText">Discover an endless variety of the world’s best artisan coffee from each of our roasters.</p>
                </div>
                <div className="reason">
                    <div id="gift-icon" className="reasonPic"></div>
                    <h4>Exclusive benefits</h4>
                    <p className="mainText">Special offers and swag when you subscribe, including 30% off your first shipment.</p>
                </div>
                <div className="reason">
                    <div id="truck-icon" className="reasonPic"></div>
                    <h4>Free Shipping</h4>
                    <p className="mainText">We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.</p>
                </div>
            </div>
        </>
    )
}
export default HomeWhyChooseUs;


