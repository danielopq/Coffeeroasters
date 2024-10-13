import { useEffect, useState } from 'react';
import './mainButton.css';

interface MainButtonProps{
    disabled?:boolean;
    value:string;
    handleClick?:()=>void;
}

/**
 * Renders the main button of the website.
 * @param {MainButtonProps} param0 - Object containing the button properties.
 * @param {boolean} param0.disabled - Indicates whether the button is disabledd or not.
 * @param {string} param0.value - The text displayed on the button.
 * @returns {JSX.Element} - MainButton component.
 */
const MainButton:React.FC<MainButtonProps> = ({disabled=false,value,handleClick})=>{

    const [buttonState,setButtonState] = useState<string>('mainButton enable');

    useEffect(()=>{
        disabled ? setButtonState('mainButton disabled') : setButtonState('mainButton enabled');
    },[disabled]);

    return(
        <button className={buttonState} onClick={handleClick} disabled={disabled}>{value}</button>
    )
}
export default MainButton;