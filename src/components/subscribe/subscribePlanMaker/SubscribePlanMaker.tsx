import './subscribePlanMaker.css';
import OptionsData from './optionsData/OptionsData';
import PlanOption from './planOption/PlanOption';
import MainButton from '../../shared/mainButton/MainButton';

const SubscribePlanMaker: React.FC = () => {
    const {option01,option02,option03,option04,option05} = OptionsData;

    const getChoice = (optionID:string, selectedChoice:string)=>{
        console.log('optionID:', optionID);
        console.log('selectedChoice:', selectedChoice);
    }

    return (
        <div id="subscribePlanMaker">
            <div id="planMakerContent">
                <div id="planIndex"></div>
                <div id="planOptions">
                    <PlanOption optionID={'option01'} deployed={true} option={option01} getChoice={getChoice}/>
                    <PlanOption optionID={'option02'} deployed={false} option={option02} getChoice={getChoice}/>
                    <PlanOption optionID={'option03'} deployed={false} option={option03} getChoice={getChoice}/>
                    <PlanOption optionID={'option04'} deployed={false} option={option04} getChoice={getChoice}/>
                    <PlanOption optionID={'option05'} deployed={false} option={option05} getChoice={getChoice}/>
                </div>
            </div>
            <MainButton enable={false} value='Create my plan!'/>
        </div>
    )
}
export default SubscribePlanMaker;