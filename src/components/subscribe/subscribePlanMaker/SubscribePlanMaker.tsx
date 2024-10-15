import './subscribePlanMaker.css';
import OptionsData from './optionsData/OptionsData';
import PlanIndex from './planIndex/PlanIndex';
import PlanOption from './planOption/PlanOption';
import PlanSummary from './planSummary/PlanSummary';
import MainButton from '../../shared/mainButton/MainButton';
import ConfirmationDialog from './confirmationDialog/ConfirmationDialog';
import { useEffect, useState } from 'react';

interface planResume {
    [option: string]: string;
}

interface planPrices {
    [option: string]: number;
}

/**
 * Renders the form where the user can customize the coffee delivery plan.
 * This component provides options for selecting preferences, bean type, quantity, grind option, and delivery frequency.
 * It also manages state for user choices, pricing, and dialog visibility.
 *
 * @returns {JSX.Element} - The SubscribePlanMaker component.
 */
const SubscribePlanMaker: React.FC = () => {
    const { option01, option02, option03, option04, option05 } = OptionsData;
    const [plan, setPlan] = useState<planResume>({ preferences: '_____', beanType: '_____', quantity: '_____', grindOption: '_____', deliveries: '_____' });
    const { preferences, beanType, quantity, grindOption, deliveries } = plan;
    const [planPrices, setPlanPrices] = useState<planPrices>({ preferences: 0, beanType: 0, quantity: 0, grindOption: 0, deliveries: 0 });
    const [finalPrice, setFinalPrice] = useState<number>(0);
    const [disabledButton, setDisabledButton] = useState<boolean>(true);
    const [showDialog, setShowDialog] = useState<boolean>(false);
    const [grindOptionBlocked, setGrindOptionBlocked] = useState<boolean>(false);

    useEffect(() => {
        let countSelectedOptions: number = 0;
        for (let i in plan) {
            plan[i] !== '_____' && countSelectedOptions++;
        }
        const planLength = Object.keys(plan).length;
        if (((planLength - countSelectedOptions) == 0 && !grindOptionBlocked) || ((planLength - countSelectedOptions) == 1 && grindOptionBlocked)) {
            setDisabledButton(false);
        } else {
            setDisabledButton(true);
        }
    }, [plan]);

    /**
     * Updates the selected choice and its price for a specific plan option.
     * Also checks if the grind option should be blocked based on the selected preferences.
     *
     * @param {string} optionID - The ID of the plan option being updated.
     * @param {string} selectedChoice - The choice selected by the user.
     * @param {number} value - The price associated with the selected choice.
     */
    const getChoice = (optionID: string, selectedChoice: string, value: number) => {
        setPlan((prevPlan) => {
            const updatedPlan = { ...prevPlan, [optionID]: selectedChoice };
            if (updatedPlan['preferences'] === 'Capsules') {
                updatedPlan['grindOption'] = '_____';
                setGrindOptionBlocked(true);
            } else {
                setGrindOptionBlocked(false);
            }
            return updatedPlan;
        });

        setPlanPrices((prevPlan) => {
            const updatedPlan = { ...prevPlan, [optionID]: value };
            return updatedPlan;
        });
    };

    /**
     * Toggles the visibility of the confirmation dialog.
     * Calculates the total price and deducts the grind option cost if the selected preference is "Capsules".
     */
    const displayDialog = () => {
        let price = 0;
        setShowDialog(!showDialog);
        for(let i in planPrices){
            price += planPrices[i];
        }
        plan['preferences'] === 'Capsules' && (price -= planPrices['grindOption']);
        setFinalPrice(price);
    }

    return (
        <>
            <div id="subscribePlanMaker">
                <div id="planMakerContent">
                    <PlanIndex preferences={preferences} beanType={beanType} quantity={quantity} grindOption={grindOption} deliveries={deliveries} blockGrindOption={grindOptionBlocked} />
                    <div id="planOptions">
                        <PlanOption optionID={'preferences'} deployed={true} option={option01} getChoice={getChoice} />
                        <PlanOption optionID={'beanType'} deployed={false} option={option02} getChoice={getChoice} />
                        <PlanOption optionID={'quantity'} deployed={false} option={option03} getChoice={getChoice} />
                        <PlanOption optionID={'grindOption'} deployed={false} option={option04} blocked={grindOptionBlocked} getChoice={getChoice} />
                        <PlanOption optionID={'deliveries'} deployed={false} option={option05} getChoice={getChoice} />
                    </div>
                </div>
                <PlanSummary preferences={preferences} beanType={beanType} quantity={quantity} grindOption={grindOption} deliveries={deliveries} />
                <MainButton disabled={disabledButton} value='Create my plan!' handleClick={displayDialog} />
            </div>
            <ConfirmationDialog preferences={preferences} beanType={beanType} quantity={quantity} grindOption={grindOption} deliveries={deliveries} showDialog={showDialog} finalPrice={finalPrice} displayDialog={displayDialog} />
        </>

    )
}
export default SubscribePlanMaker;