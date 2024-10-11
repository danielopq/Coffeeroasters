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
    optionID: string;
    option: Option;
    deployed: boolean;
    getChoice: (option:string,choice:string)=>void;
}

/**
 * Component that renders a single product option for the consumer to select within a plan.
 * @param param0 - Contains the `deployed` state and the product `option` to be displayed.
 * @returns - The rendered product option.
 */
const PlanOption: React.FC<PlanOptionProps> = ({optionID, option, deployed, getChoice}) => {

    const { optionHeader, choice01, choice02, choice03 } = option;
    const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
    const refArrow = useRef<HTMLButtonElement>(null);
    const refOptionChoices = useRef<HTMLDivElement>(null);
    const [choicesVisibility, SetChoicesVisibility] = useState<boolean>(deployed);

    useEffect(() => {
        displayChoices();
    }, [])

    /**
     * Sets the arrow to point up (choices expanded) or down (choices collapsed), and shows or hides the choices accordingly.
     */
    const displayChoices = () => {
        SetChoicesVisibility(!choicesVisibility);
        if (refArrow.current) {
            choicesVisibility ? refArrow.current.className = 'arrow arrowDown' : refArrow.current.className = 'arrow arrowUp'
        }
        if (refOptionChoices.current) {
            choicesVisibility ? refOptionChoices.current.className = 'optionChoices optionChoicesExtended' : refOptionChoices.current.className = 'optionChoices optionChoicesCollapsed'
        }
    }

    const handleClick = (id: 'choice01' | 'choice02' | 'choice03') => {
        setSelectedChoice(id);
        getChoice(optionID,option[id].title);
    };

    return (
        <div className='option'>
            <div className='optionTitle' onClick={displayChoices}>
                <h2>{optionHeader}</h2>
                <button ref={refArrow} className='arrow arrowDown'></button>
            </div>
            <div ref={refOptionChoices} className='optionChoices'>
                <PlanChoice choiceProperties={choice01} selected={selectedChoice === 'choice01' } onClick={() => handleClick('choice01')} />
                <PlanChoice choiceProperties={choice02} selected={selectedChoice === 'choice02'} onClick={() => handleClick('choice02')}/>
                <PlanChoice choiceProperties={choice03} selected={selectedChoice === 'choice03'} onClick={() => handleClick('choice03')}/>
            </div>
        </div>
    )
}

export default PlanOption;