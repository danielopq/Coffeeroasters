import './aboutUsHeader.css';

/**
 * Component that renders the header for the "About Us" section.
 * @returns {JSX.Element} - Header for the "About Us" section.
 */
const AboutUsHeader = () => {
    return (
        <header id="aboutUsHeader">
            <h2>About Us</h2>
            <p className='mainText'>Coffeeroasters began its journey of exotic discovery in 1999, highlighting
                stories of coffee from around the world. We have since been dedicated to
                bring the perfect cup - from bean to brew - in every shipment.
            </p>
        </header>
    )
}
export default AboutUsHeader;