import React, { useContext } from 'react';
import { authenticationContext } from '../AuthenticationsPage';
import { signUpContext } from './SignUp';
const RegisterPage = () => {
    const { setCurrent, current } = useContext(authenticationContext);
    const {changeStep} = useContext(signUpContext);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form action="" method="post" className='register' onSubmit={handleSubmit}>
            <div className="top">
                <div className="elipsis-row">
                    <div className='active'></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="h3">Create an account</div>
                <label>
                    Fill all the required details.
                    All the details must be same as on the Proof ID
                </label>
            </div>

            <div className="form">
                <div className="form-g">
                    <label>Full Name</label>
                    <input type="text" className="inp" placeholder=' ' required />
                </div>
                <div className="form-g">
                    <label>Email</label>
                    <input type="email" className="inp" placeholder=' ' required />
                </div>
                <div className="form-g">
                    <label>Phone</label>
                    <input type="number" min={10} minLength={10} className="inp" placeholder=' ' required />
                </div>

                <label>Already hace an Account? <a href="javascript:;" className="url" onClick={()=>setCurrent(1)}>Log in</a></label>
            </div>
            <div className="bottom">
                <div className="btnx invalid">Connect Web3</div>
                <input type="submit" value="Continue" className="btnx" onClick={()=>changeStep(1)}/>
            </div>
        </form>
    )
}

export default RegisterPage;