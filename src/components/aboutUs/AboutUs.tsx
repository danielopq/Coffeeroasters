import Footer from '../shared/footer/Footer';
import AboutUsHeader from './aboutUsHeader/AboutUsHeader';
import AboutUsCommitment from './aboutUsCommitment/AboutUsCommitment';
import AboutUsQuality from './aboutUsQuality/AboutUsQuality';
import AboutUsHeadQuarters from './aboutUsHeadQuarters/AboutUsHeadQuarters';

const AboutUs = () =>{
    return(
        <main id="aboutUs">
            <AboutUsHeader/>
            <AboutUsCommitment/>
            <AboutUsQuality/>
            <AboutUsHeadQuarters/>
            <Footer/>
        </main>
    )
}
export default AboutUs;