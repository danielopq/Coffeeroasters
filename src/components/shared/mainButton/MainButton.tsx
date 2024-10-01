import { useEffect, useState } from 'react';
import './mainButton.css';

interface MainButtonProps{
    enable:boolean;
    value:string;
}

/**
 * Renders the main button of the website.
 * @param {MainButtonProps} param0 - Object containing the button properties.
 * @param {boolean} param0.enable - Indicates whether the button is enabled or not.
 * @param {string} param0.value - The text displayed on the button.
 * @returns {JSX.Element} - MainButton component.
 */
const MainButton:React.FC<MainButtonProps> = ({enable=true,value})=>{

    const [buttonState,setButtonState] = useState<string>('mainButton enable');

    useEffect(()=>{
        enable ? setButtonState('mainButton enable') : setButtonState('mainButton disable');
    },[enable]);

    return(
        <button className={buttonState}>{value}</button>
    )
}
export default MainButton;