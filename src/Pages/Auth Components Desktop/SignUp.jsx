import React, { createContext, useState } from 'react';
import RegisterPage from './RegisterPage'
import SetPin from './SetPin';

export const signUpContext = createContext();
const SignUp = () => {
    const [steps, setSteps] = useState(0);

    const changeStep = (step) => {
        setSteps(step);
    }

    return (
        <signUpContext.Provider value={{changeStep, steps}}>
            <div className='signup'>
                {steps === 0 && <RegisterPage />}
                {/* {steps === 1 && <SetPin type={1} />} */}
                {steps === 1 && <SetPin type={2} />}
            </div>
        </signUpContext.Provider>
    )
}

export default SignUp;