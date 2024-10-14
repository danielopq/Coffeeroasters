import { useEffect, useRef, useState } from 'react';
import './planOption.css';
import PlanChoice from './planChoice/PlanChoice';

interface Choice {
    title: string;
    description: string;
    value:number;
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
    blocked?: boolean;
    getChoice: (option: string, choice: string, value:number) => void;
}

/**
 * Component that renders an individual product option within a plan, allowing the user to make a selection.
 * @param {PlanOptionProps} param0 - The properties for the component:
 * - `optionID`: A unique identifier for the option.
 * - `option`: The details of the option, including the header and the choices.
 * - `deployed`: Determines if the choices should be displayed.
 * - `blocked`: Optional flag to disable interactions with the option.
 * - `getChoice`: Function to be called when a choice is selected.
 * @returns {JSX.Element} The rendered component displaying the product option.
 */
const PlanOption: React.FC<PlanOptionProps> = ({ optionID, option, deployed, blocked = false, getChoice }) => {

    const { optionHeader, choice01, choice02, choice03 } = option;
    const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
    const refOptionButton = useRef<HTMLButtonElement>(null);
    const refOptionChoices = useRef<HTMLDivElement>(null);
    const [choicesVisibility, SetChoicesVisibility] = useState<boolean>(deployed);

    useEffect(() => {
        if (refOptionChoices.current) {
            refOptionChoices.current.className = deployed ? 'optionChoices optionChoicesExtended' : 'optionChoices optionChoicesCollapsed';
        }
    }, []);

    //Determines if the option button should be blocked based on the "blocked" prop state.
    useEffect(() => {
        SetChoicesVisibility(!blocked);
        if (blocked) {
            setSelectedChoice(null); // Reset selected choice if blocked
            if (refOptionChoices.current) {
                refOptionChoices.current.className = 'optionChoices optionChoicesCollapsed'; // Collapse choices
            }
            if (refOptionButton.current) {
                refOptionButton.current.className = 'buttonBlocked'; // Update button class
            }
        } else {
            if (refOptionButton.current) {
                refOptionButton.current.className = 'arrowDown'; // Update button class
            }
        }
    }, [blocked]);


    /**
     * Toggles the visibility of the choices and updates the button and choices styles.
     * If the option is blocked, choices remain collapsed.
     */
    const displayChoices = () => {
        if (!blocked) {
            SetChoicesVisibility(!choicesVisibility);
            if (refOptionButton.current) {
                refOptionButton.current.className = choicesVisibility ? 'arrowUp' : 'arrowDown';
            }
            if (refOptionChoices.current) {
                refOptionChoices.current.className = choicesVisibility
                    ? 'optionChoices optionChoicesExtended'
                    : 'optionChoices optionChoicesCollapsed';
            }
        }
    };

    /**
     * Handles the selection of a choice made by the user.
     * @param {string} id - The identifier of the selected choice (`choice01`, `choice02`, or `choice03`).
     */
    const handleClick = (id: 'choice01' | 'choice02' | 'choice03') => {
        setSelectedChoice(id);
        getChoice(optionID, option[id].title,option[id].value);
    };

    return (
        <div className='option'>
            <button ref={refOptionButton} onClick={displayChoices}>{optionHeader}</button>
            <div ref={refOptionChoices} className='optionChoices'>
                <PlanChoice choiceProperties={choice01} selected={selectedChoice === 'choice01'} onClick={() => handleClick('choice01')} />
                <PlanChoice choiceProperties={choice02} selected={selectedChoice === 'choice02'} onClick={() => handleClick('choice02')} />
                <PlanChoice choiceProperties={choice03} selected={selectedChoice === 'choice03'} onClick={() => handleClick('choice03')} />
            </div>
        </div>
    );
}

export default PlanOption;
