import './planSteps.css';

interface PlanStepsProps {
    fontColor: string;
}

/**
 * Component that renders the steps to subscribe to a coffee plan.
 * @param {PlanStepsProps} props - Object containing component properties.
 * @param {string} props.fontColor - Defines the font color for the text. Accepts values like 'dark' or 'light'.
 * @returns {JSX.Element} - The JSX structure displaying the steps for subscribing to the coffee plan.
 */
const PlanSteps: React.FC<PlanStepsProps> = ({ fontColor }) => {

    return (
        <div className='planSteps'>
            <div id="planStepsGraphic">
                <div className='stepsCircle'></div>
                <div className='stepsLine'></div>
                <div className='stepsCircle'></div>
                <div className='stepsLine'></div>
                <div className='stepsCircle'></div>
            </div>
            <div id="planStepsIndications" className={fontColor}>
                <div className='step'>
                    <p className='stepNumber'>01</p>
                    <h3>Pick your coffee</h3>
                    <p className='mainText'>
                        Select from our evolving range of artisan coffees.
                        Our beans are ethically sourced and we pay fair prices for them.
                        There are new coffees in all profiles every month for you to try out.
                    </p>
                </div>
                <div className='step'>
                    <p className='stepNumber'>02</p>
                    <h3>Choose the frequency</h3>
                    <p className='mainText'>
                        Customize your order frequency, quantity, even your
                        roast style and grind type. Pause, skip, or cancel your subscription with
                        no commitment through our online portal.
                    </p>
                </div>
                <div className='step'>
                    <p className='stepNumber'>03</p>
                    <h3>Receive and enjoy!</h3>
                    <p className='mainText'>
                        We ship your package within 48 hours, freshly roasted.
                        Sit back and enjoy award-winning world-class coffees curated to provide
                        a distinct tasting experience.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PlanSteps;
