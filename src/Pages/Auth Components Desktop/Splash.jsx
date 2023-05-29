import React from 'react';

const Splash = ({ current, setCurrent }) => {

    const flipFunction = () => {
        if(current > 0){
            setCurrent(0);
        }else{
            setCurrent(1)
        }
    }

    return (
        <section className='splash'>
            <label>Welcome to</label>
            <div className="h1">Campaigner</div>
            <label>An online voting App</label>
            <div className="img"><img src="img/undraw_travel_plans_re_103r.svg" alt="" /></div>
            <div className="img m2"><img src="img/undraw_agree_re_hor9.svg" alt="" /></div>
            <div className="btnx" onClick={flipFunction}>
                {current > 0 ? "Create An Account" : "Already Have an Acoount"}
            </div>
        </section>
    )
}

export default Splash;