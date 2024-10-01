import './home.css';
import Footer from '../shared/footer/Footer';
import HomeHeader from './homeHeader/HomeHeader';
import MainButton from '../shared/mainButton/MainButton';
import HomeCollection from './homeColletion/HomeCollection';
const Home: React.FC = () => {
    return (
        <main id="home">
            <HomeHeader/>
            <HomeCollection/>
            <div id="homeWhyChooseUs"></div>
            <div id="homeReasons"></div>
            <div id="homeHowItWorks"></div>
            <MainButton enable={true} value={'Create your plan'}/>
            <Footer />
        </main>
    )
}
export default Home;