import './planChoice.css';

interface Choice {
    title: string;
    description: string;
}

interface ChoiceProps{
    choiceProperties:Choice;
    selected:boolean;
    onClick: () => void;
}

const PlanChoice: React.FC<ChoiceProps> = ({choiceProperties,selected=false,onClick}) => {
    return (
        <div className={selected ? 'choice selectedChoice' : 'choice unSelectedChoice'} onClick={onClick}>
            <h4>{choiceProperties.title}</h4>
            <p className='mainText'>{choiceProperties.description}</p>
        </div>
    );
}
export default PlanChoice;