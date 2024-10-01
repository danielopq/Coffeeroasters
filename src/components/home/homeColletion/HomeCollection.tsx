import './homeCollection.css';

/**
 * Renders the Home Collection section included on the home page.
 * @returns {JSX.Element} - The HomeCollection section.
 */
const HomeCollection: React.FC = () => {
    return (
        <div id="homeCollection">
            <div id="homeOurCollection">our collection</div>
            <div id="homeCoffeVarieties">
                <div id="homeCoffeePictures">
                    <div id="granExpresoPic" className='coffeePacketPic'></div>
                    <div id="planaltoPic"  className='coffeePacketPic'></div>
                    <div id="picolloPic"  className='coffeePacketPic'></div>
                    <div id="danchePic"  className='coffeePacketPic'></div>
                </div>
                <div id="homeCoffeFeatures">
                    <div className='homeCoffeVariety'>
                        <div className='homeCoffeeName'>Gran Espresso</div>
                        <div className='homeDescription mainText'>Light and flavorful blend with cocoa and black pepper for an intense experience.</div>
                    </div>
                    <div className='homeCoffeVariety'>
                        <div className='homeCoffeeName'>Planalto</div>
                        <div className='homeDescription mainText'>Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.</div>
                    </div>
                    <div className='homeCoffeVariety'>
                        <div className='homeCoffeeName'>Picollo</div>
                        <div className='homeDescription mainText'>Mild and smooth blend featuring notes of toasted almond and dried cherry.</div>
                    </div>
                    <div className='homeCoffeVariety'>
                        <div className='homeCoffeeName'>Danche</div>
                        <div className='homeDescription mainText'>Ethiopian hand-harvested blend densely packed with vibrant fruit notes.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeCollection;