import './aboutUs.css';
import Footer from '../shared/footer/Footer';
import AboutUsHeader from './aboutUsHeader/AboutUsHeader';

const AboutUs = () =>{
    return(
        <main id="aboutUs">
            <AboutUsHeader/>
            <div id="aboutUsCommitment"></div>
            <div id="aboutUsQuality"></div>
            <div id="aboutUsHeadQuarters"></div>
            <Footer/>
        </main>
    )
}
export default AboutUs;