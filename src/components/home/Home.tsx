import './home.css';
import Footer from '../shared/footer/Footer';
import HomeHeader from './homeHeader/HomeHeader';
import MainButton from '../shared/mainButton/MainButton';
import HomeCollection from './homeColletion/HomeCollection';
import HomeWhyChooseUs from './homeWhyChooseUs/HomeWhyChooseUs';

const Home: React.FC = () => {
    return (
        <main id="home">
            <HomeHeader/>
            <HomeCollection/>
            <HomeWhyChooseUs/>
            <div id="homeHowItWorks"></div>
            <MainButton enable={true} value={'Create your plan'}/>
            <Footer />
        </main>
    )
}
export default Home;