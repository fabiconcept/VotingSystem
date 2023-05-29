import React, { createContext, useState } from 'react';
import Splash from './Auth Components Desktop/Splash';
import Login from './Auth Components Desktop/Login';
import SignUp from './Auth Components Desktop/SignUp';

export const authenticationContext = createContext();
const AuthenticationsPage = () => {
    const [current, setCurrent] = useState(0);
    return (
        <authenticationContext.Provider value={{setCurrent, current}}>
            <div className={`auth ${current === 0 ? "register" : "login"}`}>
                <main className='desktop'>
                    <Splash current={current} setCurrent={setCurrent} />
                    <section className='x-form'>
                        {current === 1 && <Login/>}
                        {current === 0 && <SignUp/>}
                    </section>
                </main>
                <main className='mobile'>
                    <section className='x-form'>
                        {current === 1 && <Login current={current} setCurrent={setCurrent} />}
                        {current === 0 && <SignUp current={current} setCurrent={setCurrent} />}
                    </section>
                </main>
            </div>
        </authenticationContext.Provider>
    )
}

export default AuthenticationsPage;