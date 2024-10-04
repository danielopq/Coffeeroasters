import './subscribe.css';
import SubscribeHeader from './subscribeHeader/SubscribeHeader';
import Footer from '../shared/footer/Footer';
import SubscribeSteps from './subscribeSteps/subscribeSteps';
const Subscribe:React.FC = ()=>{
    return(
        <main id="subscribe">
            <SubscribeHeader/>
            <SubscribeSteps/>
            <Footer/>
        </main>
    )
}
export default Subscribe;