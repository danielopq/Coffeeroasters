import { useEffect, useRef, useState } from 'react';
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
    const refOptionChoices = useRef<HTMLDivElement>(null);
    const [choicesVisibility, SetChoicesVisibility] = useState<boolean>(!deployed);

    // Sets the arrow to point up (choices expanded) or down (choices collapsed).
    useEffect(() => {
        if (refArrow.current) {
            deployed ? refArrow.current.className = 'arrow arrowDown' : refArrow.current.className = 'arrow arrowUp'
        }
        if (refOptionChoices.current) {
            deployed ? refOptionChoices.current.className = 'optionChoices optionChoicesExtended' : refOptionChoices.current.className = 'optionChoices optionChoicesCollapsed'
        }
        console.log(choicesVisibility);
    }, [])

    const handleClick = () => {
        SetChoicesVisibility(!choicesVisibility);
        console.log(choicesVisibility);
        if (refArrow.current) {
            choicesVisibility ? refArrow.current.className = 'arrow arrowDown' : refArrow.current.className = 'arrow arrowUp'
        }
        if (refOptionChoices.current) {
            choicesVisibility ? refOptionChoices.current.className = 'optionChoices optionChoicesExtended' : refOptionChoices.current.className = 'optionChoices optionChoicesCollapsed'
        }
    }


    return (
        <div className='option'>
            <div className='optionTitle'>
                <h2>{optionHeader}</h2>
                <button ref={refArrow} className='arrow arrowDown' onClick={handleClick}></button>
            </div>
            <div ref={refOptionChoices} className='optionChoices'>
                <PlanChoice choiceProperties={choice01} />
                <PlanChoice choiceProperties={choice02} />
                <PlanChoice choiceProperties={choice03} />
            </div>
        </div>
    )
}

export default PlanOption;