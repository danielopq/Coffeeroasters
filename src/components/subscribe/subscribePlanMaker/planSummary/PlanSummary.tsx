import './planSummary.css';

interface PlanSummaryProps{
    preferences:string;
    beanType:string;
    quantity:string;
    grindOption:string;
    deliveries:string;
}

/**
 * Renders a summary of the customer's selected coffee plan options.
 * Displays the choices for preferences, bean type, quantity, grind option, and delivery frequency in a formatted text.
 *
 * @param {PlanSummaryProps} props - The properties containing the selected plan options.
 * @param {string} props.preferences - The customer's coffee preparation preference (e.g., Capsules, Filter).
 * @param {string} props.beanType - The selected type of coffee bean.
 * @param {string} props.quantity - The chosen coffee quantity.
 * @param {string} props.grindOption - The selected grind option, if applicable.
 * @param {string} props.deliveries - The delivery frequency chosen by the customer.
 * @returns {JSX.Element} - The JSX element representing the summary of the plan.
 */
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