import './home.css';
import Footer from '../shared/footer/Footer';
import HomeHeader from './homeHeader/HomeHeader';
import MainButton from '../shared/mainButton/MainButton';
const Home: React.FC = () => {
    return (
        <main id="home">
            <HomeHeader/>
            <div id="homeSelection">
            </div>
            <div id="homeWhyChooseUs"></div>
            <div id="homeReasons"></div>
            <div id="homeHowItWorks"></div>
            <MainButton enable={true} value={'Create your plan'}/>
            <Footer />
        </main>
    )
}
export default Home;