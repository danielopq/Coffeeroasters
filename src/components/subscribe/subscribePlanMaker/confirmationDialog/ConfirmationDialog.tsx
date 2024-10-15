import './confirmationDialog.css';
import MainButton from '../../../shared/mainButton/MainButton';
import { useEffect } from 'react';

interface PlanSummaryProps {
    preferences: string;
    beanType: string;
    quantity: string;
    grindOption: string;
    deliveries: string;
    showDialog:boolean;
    finalPrice:number;
    displayDialog:()=>void;
}


/**
 * Renders a confirmation dialog that displays the summary of the selected plan options, 
 * the total price, and a button for confirming the order.
 * It provides users with a final review of their choices before proceeding to checkout.
 * 
 * @param {PlanSummaryProps} props - The properties for the component:
 * @param {string} props.preferences - The selected coffee preferences.
 * @param {string} props.beanType - The type of coffee bean chosen.
 * @param {string} props.quantity - The quantity of coffee selected.
 * @param {string} props.grindOption - The grind type selected (if applicable).
 * @param {string} props.deliveries - The delivery frequency selected.
 * @param {boolean} props.showDialog - Whether the dialog is currently visible.
 * @param {number} props.finalPrice - The total price for the plan.
 * @param {function} props.displayDialog - Function to toggle the visibility of the dialog.
 * 
 * @returns {JSX.Element} - The rendered confirmation dialog component.
 */
const ConfirmationDialog: React.FC<PlanSummaryProps> = ({ preferences, beanType, quantity, grindOption, deliveries,showDialog=false,finalPrice,displayDialog }) => {

    useEffect(()=>{
        if(showDialog){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = 'auto';
        }
    },[showDialog]);

    return (
        <div id="confirmationDialog" className={showDialog ? 'showDialog' : 'hideDialog'}>
            <div id="confirmationDialog-content">
                <div id="confirmationDialog-header">
                    <h2>Order Summary</h2>
                </div>
                <p id="confirmationDialog-summary">
                    “I drink my coffee {preferences == 'Capsules' ? 'using' : 'as'} <span className='confDialogChoice'>{preferences}</span>,
                    with a <span className='confDialogChoice'>{beanType}</span> type of bean.
                    <span className='confDialogChoice'> {quantity}</span>
                    {preferences === 'Capsules' ? '' : (<> ground ala <span className='confDialogChoice'>{grindOption}</span></>)}
                    , sent to me <span className='confDialogChoice'>{deliveries}</span>.”
                </p>
                <p id="confirmationDialog-instructions" className='mainText'>
                    Is this correct? You can proceed to checkout or go back to plan selection if something is off.
                    Subscription discount codes can also be redeemed at the checkout.
                </p>
                <div id="confirmationDialog-buttonArea">
                <p id="confirmationDialog-fee">${finalPrice.toFixed(2)}/sh.</p>
                    <MainButton value='Checkout' handleClick={displayDialog}/>
                </div>
            </div>
        </div>
    )
}
export default ConfirmationDialog;