import './subscribePlanMaker.css';

import MainButton from '../../shared/mainButton/MainButton';

const SubscribePlanMaker: React.FC = () => {
    return (
        <div id="subscribePlanMaker">
            <div id="planMakerContent">
                <div id="planIndex"></div>
                <div id="planOptions">
                    <div className='option'>
                        <div className='optionTitle'></div>
                        <div className='optionChoices'>
                            <div className='choice'></div>
                            <div className='choice'></div>
                            <div className='choice'></div>
                        </div>
                    </div>
                    <div className='option'>
                        <div className='optionTitle'></div>
                        <div className='optionChoices'>
                            <div className='choice'></div>
                            <div className='choice'></div>
                            <div className='choice'></div>
                        </div>
                    </div>
                    <div className='option'>
                        <div className='optionTitle'></div>
                        <div className='optionChoices'>
                            <div className='choice'></div>
                            <div className='choice'></div>
                            <div className='choice'></div>
                        </div>
                    </div>
                    <div className='option'>
                        <div className='optionTitle'></div>
                        <div className='optionChoices'>
                            <div className='choice'></div>
                            <div className='choice'></div>
                            <div className='choice'></div>
                        </div>
                    </div>
                    <div className='option'>
                        <div className='optionTitle'></div>
                        <div className='optionChoices'>
                            <div className='choice'></div>
                            <div className='choice'></div>
                            <div className='choice'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="planSummary"></div>
            <MainButton enable={false} value='Create my plan!'/>
        </div>
    )
}
export default SubscribePlanMaker;