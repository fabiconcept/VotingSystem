import React, { useEffect, useState } from 'react';
import AuthenticationsPage from './Pages/AuthenticationsPage';
import Dashborad from './Pages/Dashboard';

const App = () => {
    const [controlKeyState, setControlKeyState] = useState(false);
    const [pairKey, setPairKey] = useState("");
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleKeyCombo = (e) => {
        e.preventDefault();
        const pressedValue = e;
        const keyValue = String(pressedValue.key).toLowerCase();
        const keyCode = pressedValue.keyCode;

        if (pressedValue.ctrlKey) {
            setControlKeyState(pressedValue.ctrlKey);
        }else{
            if(keyCode > 64 && keyCode < 91){
                setPairKey(keyValue);
            }
            setControlKeyState(pressedValue.ctrlKey);
        }
    }

    useEffect(()=>{
        if (controlKeyState & String(pairKey).length > 0) {
            const combo = (`ctrl + ${pairKey}`);

            if (combo === "ctrl + d") {
                setIsDarkMode(!isDarkMode);
                setPairKey('');
                setControlKeyState(false);
            }
        }else{
            setPairKey('');
        }
    }, [pairKey, controlKeyState]);

    useEffect(()=>{
        document.addEventListener("keydown", e=>handleKeyCombo(e));

        return(
            document.removeEventListener("keyup", e=>handleKeyCombo(e))
        )
    }, [])

    return (
        <div className={`app ${isDarkMode ? "dark" : ""}`}>
            {/* <AuthenticationsPage /> */}
            <Dashborad/>
        </div>
    )
}

export default App;