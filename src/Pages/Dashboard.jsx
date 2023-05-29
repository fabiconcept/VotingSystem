import React from 'react';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <nav>
                <div className="logo">INEC DApp</div>
                <div className="user"><img src="img/user.svg" alt="user" /></div>
            </nav>
            <main>
                <section>
                    <img src="img/undraw_articles_wbpb.svg" alt="" />
                    <div className="p">If you want to cast ypur vote</div>
                    <div className="btnx">Participate</div>
                </section>
                <section>
                    <img src="img/undraw_working_re_ddwy.svg" alt="" />
                    <div className="p">If you want to cast ypur vote</div>
                    <div className="btnx">Participate</div>
                </section>
                <section>
                    <img src="img/undraw_ideas_flow_re_bmea.svg" alt="" />
                    <div className="p">If you want to cast ypur vote</div>
                    <div className="btnx">Participate</div>
                </section>
                <section>
                    <img src="img/undraw_election_day_w842.svg" alt="" />
                    <div className="p">If you want to cast ypur vote</div>
                    <div className="btnx">Participate</div>
                </section>
                <section>
                    <img src="img/undraw_note_list_re_r4u9.svg" alt="" />
                    <div className="p">If you want to cast ypur vote</div>
                    <div className="btnx">Participate</div>
                </section>
            </main>
        </div>
    )
}

export default Dashboard;