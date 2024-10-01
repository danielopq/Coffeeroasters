import './home.css';
import Footer from '../shared/footer/Footer';
import HomeHeader from './homeHeader/HomeHeader';
const Home: React.FC = () => {
    return (
        <main id="home">
            <HomeHeader/>
            <div id="homeSelection">
            </div>
            <div id="homeWhyChooseUs"></div>
            <div id="homeReasons"></div>
            <div id="homeHowItWorks"></div>
            
            <Footer />
        </main>
    )
}
export default Home;