import { useEffect, useRef } from 'react';
import './planOption.css';
import PlanChoice from './planChoice/PlanChoice';

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
                <PlanChoice choiceProperties={choice01}/>
                <PlanChoice choiceProperties={choice02}/>
                <PlanChoice choiceProperties={choice03}/>
            </div>
        </div>
    )
}

export default PlanOption;