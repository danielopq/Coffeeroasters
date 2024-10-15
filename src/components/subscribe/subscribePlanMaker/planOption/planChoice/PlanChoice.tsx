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

/**
 * Renders a selectable choice for a product option within the plan.
 * The component displays the choice's title and description, and highlights
 * the selection status based on the `selected` prop.
 *
 * @param {ChoiceProps} props - The properties for the component:
 * @param {Choice} props.choiceProperties - Contains the title and description of the choice.
 * @param {boolean} props.selected - Indicates if the choice is currently selected.
 * @param {function} props.onClick - Function to be called when the choice is clicked.
 * @returns {JSX.Element} The rendered component for the product choice.
 */
const PlanChoice: React.FC<ChoiceProps> = ({choiceProperties,selected=false,onClick}) => {
    return (
        <div className={selected ? 'choice selectedChoice' : 'choice unSelectedChoice'} onClick={onClick}>
            <h4>{choiceProperties.title}</h4>
            <p className='mainText'>{choiceProperties.description}</p>
        </div>
    );
}
export default PlanChoice;