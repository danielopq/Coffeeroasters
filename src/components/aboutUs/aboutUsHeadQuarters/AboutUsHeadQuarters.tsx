import './aboutUsHeadQuarters.css';

/**
 * Component that renders the headquarters information on the "About Us" page.
 * @returns {JSX.Element} - The headquarters information on the "About Us" page.
 */
const AboutUsHeadQuarters: React.FC = () => {
    return (
        <div id="aboutUsHeadQuarters">
            <h4>Our headquarters</h4>
            <div id="headQuatersInfo">
                <div className='headQuaterDetails'>
                    <div id="UK-pic" className='countryPic'></div>
                    <h3>United Kingdom</h3>
                    <p className='mainText'>
                        68  Asfordby Rd<br/>
                        Alcaston<br/>
                        SY6 1YA<br/>
                        +44 1241 918425
                    </p>
                </div>
                <div className='headQuaterDetails'>
                    <div id="Canada-pic" className='countryPic'></div>
                    <h3>Canada</h3>
                    <p className='mainText'>
                        1528  Eglinton Avenue<br/>
                        Toronto<br/>
                        Ontario M4P 1A6<br/>
                        +1 416 485 2997
                    </p>
                </div>
                <div className='headQuaterDetails'>
                    <div id="Australia-pic" className='countryPic'></div>
                    <h3>Australia</h3>
                    <p className='mainText'>
                        36 Swanston Street<br/>
                        Kewell<br/>
                        Victoria<br/>
                        +61 4 9928 3629
                    </p>
                </div>
            </div>
        </div>
    )
}
export default AboutUsHeadQuarters;