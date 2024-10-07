import './subscribePlanMaker.css';
import PlanOption from './planOption/PlanOption';
import MainButton from '../../shared/mainButton/MainButton';

const SubscribePlanMaker: React.FC = () => {
    return (
        <div id="subscribePlanMaker">
            <div id="planMakerContent">
                <div id="planIndex"></div>
                <div id="planOptions">
                    <PlanOption deployed={false}/>
                    <PlanOption deployed={false}/>
                    <PlanOption deployed={false}/>
                    <PlanOption deployed={false}/>
                    <PlanOption deployed={false}/>
                </div>
            </div>
            <div id="planSummary"></div>
            <MainButton enable={false} value='Create my plan!'/>
        </div>
    )
}
export default SubscribePlanMaker;