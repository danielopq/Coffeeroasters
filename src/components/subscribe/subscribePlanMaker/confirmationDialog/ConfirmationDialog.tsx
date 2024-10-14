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