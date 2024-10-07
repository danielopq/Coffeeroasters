import { useEffect, useRef } from 'react';
import './planOption.css';

interface PlanOptionProps {
    deployed: boolean;
}

const PlanOption: React.FC<PlanOptionProps> = ({ deployed }) => {


    const refArrow = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (refArrow.current) {
            deployed ? refArrow.current.className = 'arrow arrowDown' : refArrow.current.className = 'arrow arrowUp'
        }
    }, [deployed])

    return (
        <div className='option'>
            <div className='optionTitle'>
                <h2>how do you drink your coffee?</h2>
                <button ref={refArrow} className='arrow arrowDown'></button>
            </div>
            <div className='optionChoices'>
                <div className='choice'>
                    <h4>Capsule</h4>
                    <p className='mainText'>
                    Compatible with Nespresso systems and similar brewers.
                    </p>
                </div>
                <div className='choice'>
                    <h4>Capsule</h4>
                    <p className='mainText'>For pour over or drip methods like Aeropress, Chemex, and V60</p>
                </div>
                <div className='choice'>
                    <h4>Capsule</h4>
                    <p className='mainText'>Dense and finely ground beans for an intense, flavorful experience</p>
                </div>
            </div>
        </div>
    )
}

export default PlanOption;