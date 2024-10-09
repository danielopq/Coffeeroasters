import { useEffect, useRef } from 'react';
import './planChoice.css';

interface Choice {
    title: string;
    description: string;
}

interface ChoiceProps{
    id:string;
    choiceProperties:Choice;
    selected:boolean;
}

const PlanChoice: React.FC<ChoiceProps> = ({id,choiceProperties,selected=false}) => {
    const refChoice = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        if(refChoice.current){
            selected ? refChoice.current.className = 'choice selectedChoice' : refChoice.current.className = 'choice unSelectedChoice'; 
        }
    },[selected]);

    const handleClick = () =>{
    }

    return (
        <div ref={refChoice} className='choice unSelectedChoice'>
            <h4>{choiceProperties.title}</h4>
            <p className='mainText'>{choiceProperties.description}</p>
        </div>
    );
}
export default PlanChoice;