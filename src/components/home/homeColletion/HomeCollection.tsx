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
                <div id="granExpreso" className='variety'>
                    <div id="granExpresoPic" className='coffeePacketPic'></div>
                    <div id="granExpresoDesc" className='homeCoffeVariety'>
                        <div className='homeCoffeeName'>Gran Espresso</div>
                        <div className='homeDescription mainText'>Light and flavorful blend with cocoa and black pepper for an intense experience.</div>
                    </div>
                </div>
                <div id="planalto" className='variety'>
                    <div id="planaltoPic" className='coffeePacketPic'></div>
                    <div id="planaltoDesc" className='homeCoffeVariety'>
                        <div className='homeCoffeeName'>Planalto</div>
                        <div className='homeDescription mainText'>Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.</div>
                    </div>
                </div>
                <div id="picollo" className='variety'>
                    <div id="picolloPic" className='coffeePacketPic'></div>
                    <div id="picolloDesc" className='homeCoffeVariety'>
                        <div className='homeCoffeeName'>Piccollo</div>
                        <div className='homeDescription mainText'>Mild and smooth blend featuring notes of toasted almond and dried cherry.</div>
                    </div>
                </div>
                <div id="danche" className='variety'>
                    <div id="danchePic" className='coffeePacketPic'></div>
                    <div id="dancheDesc" className='homeCoffeVariety'>
                        <div className='homeCoffeeName'>Danche</div>
                        <div className='homeDescription mainText'>Ethiopian hand-harvested blend densely packed with vibrant fruit notes.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeCollection;