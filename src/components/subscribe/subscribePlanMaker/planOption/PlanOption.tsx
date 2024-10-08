import { useEffect, useRef } from 'react';
import './planOption.css';

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

interface PlanOptionProps {
    deployed: boolean;
    option: Option;
}

const PlanOption: React.FC<PlanOptionProps> = ({ deployed, option }) => {

    const { optionHeader, choice01, choice02, choice03 } = option;
    const refArrow = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (refArrow.current) {
            deployed ? refArrow.current.className = 'arrow arrowDown' : refArrow.current.className = 'arrow arrowUp'
        }
    }, [deployed])

    return (
        <div className='option'>
            <div className='optionTitle'>
                <h2>{optionHeader}</h2>
                <button ref={refArrow} className='arrow arrowDown'></button>
            </div>
            <div className='optionChoices'>
                <div className='choice'>
                    <h4>{choice01.title}</h4>
                    <p className='mainText'>{choice01.description}</p>
                </div>
                <div className='choice'>
                    <h4>{choice02.title}</h4>
                    <p className='mainText'>{choice02.description}</p>
                </div>
                <div className='choice'>
                    <h4>{choice03.title}</h4>
                    <p className='mainText'>{choice03.description}</p>
                </div>
            </div>
        </div>
    )
}

export default PlanOption;