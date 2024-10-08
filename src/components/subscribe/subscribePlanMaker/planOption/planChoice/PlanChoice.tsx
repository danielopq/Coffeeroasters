import './planChoice.css';

interface Choice {
    title: string;
    description: string;
}

interface ChoiceProps{
    choiceProperties:Choice;
}

const PlanChoice: React.FC<ChoiceProps> = ({choiceProperties}) => {
    return (
        <div className='choice'>
            <h4>{choiceProperties.title}</h4>
            <p className='mainText'>{choiceProperties.description}</p>
        </div>
    );
}
export default PlanChoice;