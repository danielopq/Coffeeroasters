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

    const getChoice = (optionID: string, selectedChoice: string) => {
        setPlan({ ...plan, [optionID]: selectedChoice });
    }

    return (
        <div id="subscribePlanMaker">
            <div id="planMakerContent">
                <PlanIndex preferences={preferences} beanType={beanType} quantity={quantity} grindOption={grindOption} deliveries={deliveries} />
                <div id="planOptions">
                    <PlanOption optionID={'preferences'} deployed={true} option={option01} getChoice={getChoice} />
                    <PlanOption optionID={'beanType'} deployed={false} option={option02} getChoice={getChoice} />
                    <PlanOption optionID={'quantity'} deployed={false} option={option03} getChoice={getChoice} />
                    <PlanOption optionID={'grindOption'} deployed={false} option={option04} blocked={true} getChoice={getChoice} />
                    <PlanOption optionID={'deliveries'} deployed={false} option={option05} getChoice={getChoice} />
                </div>
            </div>
            <PlanSummary preferences={preferences} beanType={beanType} quantity={quantity} grindOption={grindOption} deliveries={deliveries}/>
            <MainButton enable={false} value='Create my plan!' />
        </div>
    )
}
export default SubscribePlanMaker;