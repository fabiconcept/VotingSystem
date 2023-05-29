import React, { useState, useContext, useEffect } from 'react';
import { signUpContext } from './SignUp';


const SetPin = ({type}) => {
    const {changeStep} = useContext(signUpContext);
    const [inputedPin, setInputedPin] = useState('');

    const handleInput = (e) =>{
        if (String(inputedPin).length < 6) {
            setInputedPin(`${inputedPin}${e}`);
        }
    }

    useEffect(()=>{
        if (inputedPin === 6) {
            changeStep(2);
        }
    }, [inputedPin]);

    const handleErase = () =>{
        const erasedText = inputedPin.slice(0, -1);
        setInputedPin(erasedText);
    }

    return (
        <div className="pinPage">
            <div className="top">
                {type === 0 && <div className="elipsis-row">
                    <div className='active'></div>
                    <div className='active'></div>
                </div>}
                {type === 1 && <div className="elipsis-row">
                    <div className='active'></div>
                    <div className='active'></div>
                    <div></div>
                </div>}
                {type === 2 && <div className="elipsis-row">
                    <div className='active'></div>
                    <div className='active'></div>
                    <div className='active'></div>
                </div>}
                <div className="h3">
                    {type === 0 ? "Enter Your PIN": type === 1 ? "Set a PIN" : "Confirm PIN"}
                </div>
                <label>
                    {type === 1 && <span>You'll have to enter a pin whenever you Login to the DApp.</span> }
                    {type === 2 && <span>Re-Enter your PIN to confirm. <br /><br /></span> }
                    {type === 0 && <span>Enter your PIN to verify & login your account. <br /><br /></span> }
                </label>
            </div>

            <div className="mid-section">
                <div className="p">Set your six digit unique PIN.</div>
                <div className="pinRow">
                    <div className={`${String(inputedPin).length > 0 ? "active": ""}`}></div>
                    <div className={`${String(inputedPin).length > 1 ? "active": ""}`}></div>
                    <div className={`${String(inputedPin).length > 2 ? "active": ""}`}></div>
                    <div className={`${String(inputedPin).length > 3 ? "active": ""}`}></div>
                    <div className={`${String(inputedPin).length > 4 ? "active": ""}`}></div>
                    <div className={`${String(inputedPin).length > 5 ? "active": ""}`}></div>
                </div>
            </div>

            <div className="btn-section">
                <div className={`btnx ${String(inputedPin).length > 5 ? "invalid" : ""}`} onClick={()=>handleInput(9)}>9</div>
                <div className={`btnx ${String(inputedPin).length > 5 ? "invalid" : ""}`} onClick={()=>handleInput(8)}>8</div>
                <div className={`btnx ${String(inputedPin).length > 5 ? "invalid" : ""}`} onClick={()=>handleInput(7)}>7</div>
                <div className={`btnx ${String(inputedPin).length > 5 ? "invalid" : ""}`} onClick={()=>handleInput(6)}>6</div>
                <div className={`btnx ${String(inputedPin).length > 5 ? "invalid" : ""}`} onClick={()=>handleInput(5)}>5</div>
                <div className={`btnx ${String(inputedPin).length > 5 ? "invalid" : ""}`} onClick={()=>handleInput(4)}>4</div>
                <div className={`btnx ${String(inputedPin).length > 5 ? "invalid" : ""}`} onClick={()=>handleInput(3)}>3</div>
                <div className={`btnx ${String(inputedPin).length > 5 ? "invalid" : ""}`} onClick={()=>handleInput(2)}>2</div>
                <div className={`btnx ${String(inputedPin).length > 5 ? "invalid" : ""}`} onClick={()=>handleInput(1)}>1</div>
                <div className={`btnx ${String(inputedPin).length > 5 ? "invalid" : ""}`} onClick={()=>handleInput(0)}>0</div>
                <div className={`btnx ${String(inputedPin).length === 0 ? "invalid" : ""}`} onClick={handleErase}>{`<--`}</div>
            </div>
        </div>
    )
}

export default SetPin;