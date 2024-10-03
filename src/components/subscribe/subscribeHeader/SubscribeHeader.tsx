import './subscribeHeader.css';

/**
 * Component that renders the header for the subscribe page.
 * @returns {JSX.Element} - The header for the subscribe page.
 */
const SubscribeHeader:React.FC = () => {
    return (
        <header id="subscribeHeader">
            <h1>Create a plan</h1>
            <p className='mainText'>
                Coffee the way you wanted it to be. For coffee delivered tomorrow,
                or next week. For whatever brew method you use. For choice,
                for convenience, for quality.
            </p>
        </header>
    )
}
export default SubscribeHeader;