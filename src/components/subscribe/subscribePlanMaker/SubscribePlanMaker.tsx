import './subscribePlanMaker.css';
import OptionsData from './optionsData/optionsData';
import PlanOption from './planOption/PlanOption';
import MainButton from '../../shared/mainButton/MainButton';

interface Choice {
    title: string;
    description: string;
}

interface Option {
    optionHeader: string;
    choice01: Choice;
    choice02: Choice;
    choice03: Choice;
}

interface OptionsList {
    [optionTitle: string]: Option;
}

const SubscribePlanMaker: React.FC = () => {
    const {option01,option02,option03,option04,option05} = OptionsData; 
    return (
        <div id="subscribePlanMaker">
            <div id="planMakerContent">
                <div id="planIndex"></div>
                <div id="planOptions">
                    <PlanOption deployed={false} option={option01}/>
                    <PlanOption deployed={false} option={option02}/>
                    <PlanOption deployed={false} option={option03}/>
                    <PlanOption deployed={false} option={option04}/>
                    <PlanOption deployed={false} option={option05}/>
                </div>
            </div>
            <div id="planSummary"></div>
            <MainButton enable={false} value='Create my plan!'/>
        </div>
    )
}
export default SubscribePlanMaker;