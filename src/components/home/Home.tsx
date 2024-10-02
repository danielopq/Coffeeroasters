import './home.css';
import Footer from '../shared/footer/Footer';
import HomeHeader from './homeHeader/HomeHeader';
import MainButton from '../shared/mainButton/MainButton';
import HomeCollection from './homeColletion/HomeCollection';
import HomeWhyChooseUs from './homeWhyChooseUs/HomeWhyChooseUs';
import PlanSteps from '../shared/planSteps/PlanSteps';

const Home: React.FC = () => {
    return (
        <main id="home">
            <HomeHeader/>
            <HomeCollection/>
            <HomeWhyChooseUs/>
            <h4>How it works?</h4>
            <PlanSteps fontColor='dark'/>
            <MainButton enable={true} value={'Create your plan'}/>
            <Footer />
        </main>
    )
}
export default Home;