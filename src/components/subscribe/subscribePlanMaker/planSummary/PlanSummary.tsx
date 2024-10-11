import './planSummary.css';

interface PlanSummaryProps{
    preferences:string;
    beanType:string;
    quantity:string;
    grindOption:string;
    deliveries:string;
}

const PlanSummary:React.FC<PlanSummaryProps> = ({preferences,beanType,quantity,grindOption,deliveries}) => {
    return (
        <div id="planSummary">
            <div id="planSummary-content">
                <p className='mainText'>ORDER SUMMARY</p>
                <p id="planSummary-resumeText">
                    “I drink my coffee {preferences == 'Capsules' ? 'using' : 'as'} <span className='planChoice'>{preferences}</span>,
                    with a <span className='planChoice'>{beanType}</span> type of bean.
                    <span className='planChoice'> {quantity}</span>
                    {preferences === 'Capsules' ? '' : (<> ground ala <span className='planChoice'>{grindOption}</span></>)}
                    , sent to me <span className='planChoice'>{deliveries}</span>.”
                </p>
            </div>
        </div>
    )
}
export default PlanSummary;