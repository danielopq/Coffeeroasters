import { useEffect, useRef } from 'react';
import './planIndex.css';

interface PlanIndexProps{
    preferences:string;
    beanType:string;
    quantity:string;
    grindOption:string;
    deliveries:string;
    blockGrindOption:boolean;
}

const PlanIndex:React.FC<PlanIndexProps> = ({preferences,beanType,quantity,grindOption,deliveries,blockGrindOption=false})=>{


    const refGrindOption = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        if(refGrindOption.current){
            refGrindOption.current.className
        }   
    },[blockGrindOption])

    return(
        <div id="planIndex">
        <div className={preferences === '_____' ? 'indexOption indexUnselected' : 'indexOption' }>
            <p className='indexOptionNumber' style={{color:'var(--darkCyan)'}}>01</p>
            <p>Preferences</p>
        </div>
        <div className={beanType === '_____' ? 'indexOption indexUnselected' : 'indexOption' }>
            <p className='indexOptionNumber'>02</p>
            <p>Bean Type</p>
        </div>
        <div className={quantity === '_____' ? 'indexOption indexUnselected' : 'indexOption' }>
            <p className='indexOptionNumber'>03</p>
            <p>Quantity</p>
        </div>
        <div ref={refGrindOption} className={ blockGrindOption ? 'indexOption indexBlocked' : (grindOption === '_____' ? 'indexOption indexUnselected' : 'indexOption')  }>
            <p className='indexOptionNumber'>04</p>
            <p>Grind Option</p>
        </div>
        <div className={deliveries === '_____' ? 'indexOption indexUnselected' : 'indexOption' } style={{border:'none'}}>
            <p className='indexOptionNumber'>05</p>
            <p>Deliveries</p>
        </div>   
    </div>
    )
}
export default PlanIndex;