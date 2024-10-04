import './subscribe.css';
import SubscribeHeader from './subscribeHeader/SubscribeHeader';
import SubscribeSteps from './subscribeSteps/SubscribeSteps';
import SubscribePlanMaker from './subscribePlanMaker/SubscribePlanMaker';
import Footer from '../shared/footer/Footer';

const Subscribe:React.FC = ()=>{
    return(
        <main id="subscribe">
            <SubscribeHeader/>
            <SubscribeSteps/>
            <SubscribePlanMaker/>
            <Footer/>
        </main>
    )
}
export default Subscribe;