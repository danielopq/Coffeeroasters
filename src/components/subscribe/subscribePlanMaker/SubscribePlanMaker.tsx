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

    const [plan,setPlan] = useState<planResume>({preferences:'_____',beanType:'_____',quantity:'_____',grindOption:'_____',deliveries:'_____'});
    const {preferences,beanType,quantity,grindOption,deliveries} = plan;

    const getChoice = (optionID:string, selectedChoice:string)=>{
        setPlan({...plan,[optionID]:selectedChoice});
    }

    return (
        <div id="subscribePlanMaker">
            <div id="planMakerContent">
                <div id="planIndex">
                    <div className={preferences === '_____' ? 'indexOption indexUnselected' : 'indexOption' }>
                        <p className='indexOptionNumber' style={{color:'var(--darkCyan)'}}>01</p>
                        <p>Preferences</p>
                    </div>
                    <div className={beanType === '_____' ? 'indexOption indexUnselected' : 'indexOption' }>
                        <p className='indexOptionNumber'>02</p>
                        <p>Bean Type</p>
                    </div>
                    <div className={quantity === '_____' ? 'indexOption indexUnselected' : 'indexOption' }>
                        <p className='indexOptionNumber'>03</p>
                        <p>Quantity</p>
                    </div>
                    <div className={grindOption === '_____' ? 'indexOption indexUnselected' : 'indexOption' }>
                        <p className='indexOptionNumber'>04</p>
                        <p>Grind Option</p>
                    </div>
                    <div className={deliveries === '_____' ? 'indexOption indexUnselected' : 'indexOption' } style={{border:'none'}}>
                        <p className='indexOptionNumber'>05</p>
                        <p>Deliveries</p>
                    </div>   
                </div>
                <div id="planOptions">
                    <PlanOption optionID={'preferences'} deployed={true} option={option01} getChoice={getChoice}/>
                    <PlanOption optionID={'beanType'} deployed={false} option={option02} getChoice={getChoice}/>
                    <PlanOption optionID={'quantity'} deployed={false} option={option03} getChoice={getChoice}/>
                    <PlanOption optionID={'grindOption'} deployed={false} option={option04} getChoice={getChoice}/>
                    <PlanOption optionID={'deliveries'} deployed={false} option={option05} getChoice={getChoice}/>
                </div>
            </div>
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
            <MainButton enable={false} value='Create my plan!'/>
        </div>
    )
}
export default SubscribePlanMaker;