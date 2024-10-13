import './subscribePlanMaker.css';
import OptionsData from './optionsData/OptionsData';
import PlanIndex from './planIndex/PlanIndex';
import PlanOption from './planOption/PlanOption';
import PlanSummary from './planSummary/PlanSummary';
import MainButton from '../../shared/mainButton/MainButton';
import { useState } from 'react';

interface planResume {
    [option: string]: string;
}

const SubscribePlanMaker: React.FC = () => {
    const { option01, option02, option03, option04, option05 } = OptionsData;
    const [plan, setPlan] = useState<planResume>({ preferences: '_____', beanType: '_____', quantity: '_____', grindOption: '_____', deliveries: '_____' });
    const { preferences, beanType, quantity, grindOption, deliveries } = plan;
    const [grindOptionBlocked,setGrindOptionBlocked] = useState<boolean>(false);

    const getChoice = (optionID: string, selectedChoice: string) => {
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
    };

    return (
        <div id="subscribePlanMaker">
            <div id="planMakerContent">
                <PlanIndex preferences={preferences} beanType={beanType} quantity={quantity} grindOption={grindOption} deliveries={deliveries} blockGrindOption={grindOptionBlocked}/>
                <div id="planOptions">
                    <PlanOption optionID={'preferences'} deployed={true} option={option01} getChoice={getChoice} />
                    <PlanOption optionID={'beanType'} deployed={false} option={option02} getChoice={getChoice} />
                    <PlanOption optionID={'quantity'} deployed={false} option={option03} getChoice={getChoice} />
                    <PlanOption optionID={'grindOption'} deployed={false} option={option04} blocked={grindOptionBlocked} getChoice={getChoice} />
                    <PlanOption optionID={'deliveries'} deployed={false} option={option05} getChoice={getChoice} />
                </div>
            </div>
            <PlanSummary preferences={preferences} beanType={beanType} quantity={quantity} grindOption={grindOption} deliveries={deliveries} />
            <MainButton enable={false} value='Create my plan!' />
        </div>
    )
}
export default SubscribePlanMaker;