import './confirmationDialog.css';
import MainButton from '../../../shared/mainButton/MainButton';
import { useEffect } from 'react';

interface PlanSummaryProps {
    preferences: string;
    beanType: string;
    quantity: string;
    grindOption: string;
    deliveries: string;
    showConfirmationDialog:boolean;
}

const ConfirmationDialog: React.FC<PlanSummaryProps> = ({ preferences, beanType, quantity, grindOption, deliveries,showConfirmationDialog=false }) => {

    useEffect(()=>{

    },[showConfirmationDialog]);

    return (
        <div id="confirmationDialog" className={showConfirmationDialog ? 'showDialog' : 'hideDialog'}>
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
                    <p id="confirmationDialog-fee">$14.00/ mo</p>
                    <MainButton value='Checkout'/>
                </div>
            </div>
        </div>
    )
}
export default ConfirmationDialog;