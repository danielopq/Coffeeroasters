import './aboutUsQuality.css';

/**
 * Component that renders the "Quality" section in the "About Us" page.
 * @returns {JSX.Element} - The "Quality" section of the "About Us" page.
 */
const AboutUsQuality = () => {
    return (
        <div id="aboutUsQuality">
            <div id="qualityPic"></div>
            <div id="qualityInfo">
                <h2>Uncompromising quality</h2>
                <p className='mainText'>
                    Although we work with growers who pay close attention
                    to all stages of harvest and processing, we employ,
                    on our end, a rigorous quality control program to avoid
                    over-roasting or baking the coffee dry. Every bag of
                    coffee is tagged with a roast date and batch number.
                    Our goal is to roast consistent, user-friendly coffee,
                    so that brewing is easy and enjoyable.
                </p>
            </div>
        </div>
    )
}
export default AboutUsQuality;