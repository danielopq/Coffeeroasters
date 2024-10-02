import './aboutUs.css';
import Footer from '../shared/footer/Footer';
import AboutUsHeader from './aboutUsHeader/AboutUsHeader';
import AboutUsCommitment from './aboutUsCommitment/AboutUsCommitment';
import AboutUsQuality from './aboutUsQuality/aboutUsQuality';

const AboutUs = () =>{
    return(
        <main id="aboutUs">
            <AboutUsHeader/>
            <AboutUsCommitment/>
            <AboutUsQuality/>
            <div id="aboutUsHeadQuarters"></div>
            <Footer/>
        </main>
    )
}
export default AboutUs;