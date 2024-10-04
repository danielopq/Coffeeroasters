import './subscribeSteps.css';
import PlanSteps from '../../shared/planSteps/PlanSteps';

/**
 * Component that renders the subscription steps on the "subscribe" page.
 * @returns {JSX.Element} - Subscription steps on the "subscribe" page.
 */
const SubscribeSteps:React.FC = () =>{
    return(
        <div id="subscribeSteps">
            <PlanSteps fontColor='light'/>
        </div>
    )
}
export default SubscribeSteps;