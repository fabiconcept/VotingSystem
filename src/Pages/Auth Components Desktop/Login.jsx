import React, { useContext } from 'react';
import { authenticationContext } from '../AuthenticationsPage';

const Login = () => {
    const {setCurrent, current} = useContext(authenticationContext);
    return (
        <div className='login'>
            <div className="top">
                <div className="elipsis-row">
                    <div className='active'></div>
                    <div></div>
                </div>
                <div className="h3">Welcome back</div>
                <label>
                    Sign in to your already existing account.
                </label>
            </div>
            <div className="form bottom">
                <div className="btnx">Connect Web3</div>
                <div className="btnx invalid">Proceed</div>
            </div>
        </div>
    )
}

export default Login;