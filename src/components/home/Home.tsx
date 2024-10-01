import './home.css';
import Footer from '../footer/Footer';
const Home: React.FC = () => {
    return (
        <main id="home">
            <header id="homeHeader"></header>
            <div id="homeSelection"></div>
            <div id="homeWhyChooseUs"></div>
            <div id="homeReasons"></div>
            <div id="homeHowItWorks"></div>
            <button id="homeBt"></button>
            <Footer/>
        </main>
    )
}
export default Home;