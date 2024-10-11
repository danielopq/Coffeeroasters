import './subscribePlanMaker.css';
import OptionsData from './optionsData/OptionsData';
import PlanOption from './planOption/PlanOption';
import MainButton from '../../shared/mainButton/MainButton';
import { useState } from 'react';

interface planResume{
    [option:string]:string;
}

const SubscribePlanMaker: React.FC = () => {
    const {option01,option02,option03,option04,option05} = OptionsData;

    const [plan,setPlan] = useState<planResume>({drinkStyle:'',coffeeType:'',weight:'',grindingType:'',delivery:''});
    
    const getChoice = (optionID:string, selectedChoice:string)=>{
        setPlan({...plan,[optionID]:selectedChoice});
        console.table(plan);
    }

    return (
        <div id="subscribePlanMaker">
            <div id="planMakerContent">
                <div id="planIndex"></div>
                <div id="planOptions">
                    <PlanOption optionID={'drinkStyle'} deployed={true} option={option01} getChoice={getChoice}/>
                    <PlanOption optionID={'coffeeType'} deployed={false} option={option02} getChoice={getChoice}/>
                    <PlanOption optionID={'weight'} deployed={false} option={option03} getChoice={getChoice}/>
                    <PlanOption optionID={'grindingType'} deployed={false} option={option04} getChoice={getChoice}/>
                    <PlanOption optionID={'delivery'} deployed={false} option={option05} getChoice={getChoice}/>
                </div>
            </div>
            <div id="planSummary">
                <div id="planSummary-content">
                    <p className='mainText'>ORDER SUMMARY</p>
                    <p id="planSummary-resumeText">
                    “I drink my coffee using _____, with a _____ type of bean. _____ , sent to me _____.”
                    </p>
                </div>
            </div>
            <MainButton enable={false} value='Create my plan!'/>
        </div>
    )
}
export default SubscribePlanMaker;