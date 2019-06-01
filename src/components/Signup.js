import React from 'react';
import Signup from '../containers/Signup';
import Footer from './Footer';

const SignupComp = () => (
  <div className="containerl">
    <header className="head-login">
      <div>
        <ul>
          <li id="head-text">
            <a href="/" dangerouslySetInnerHTML={{ __html: '&Popf;&oopf;&lopf;&iopf;&topf;&iopf;&copf;O' }} />
          </li>
        </ul>
      </div>
      <div>
        <ul className="head-login-ul">
          <li>
            <a id="signup-btn" href="/">Login</a>
          </li>
        </ul>
      </div>
    </header>
    <section className="home-sectionb home-section-homeb">
      {' '}
      <div id="action-wordb">
        <div>
          <h2 className="centre">
          Welcome to
            <span> Politico, </span>
          vote at the click of a button!
          </h2>
          <Signup />
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default SignupComp;
