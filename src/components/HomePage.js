import React from 'react';
import Header from './Header';
import Footer from './Footer';

const HomePage = () => (
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
            <a id="signup-btn" href="/signup">Signup</a>
          </li>
        </ul>
      </div>
    </header>
    {/* <nav id="navbar">
      <div className="logo">
        <img src="./images/logo.png" alt="Politico logo" />
        <h1><a href="index.html">olitico</a></h1>
      </div>
      <div className="link">
        <ul>
          <li>
            <a href="signup.html">
              <span className="icon signup-nav" />
              {' '}
Signup
            </a>

          </li>
          <li>
            <a href="login.html">
              <span className="icon login-nav" />
              {' '}
Login
            </a>

          </li>
        </ul>
      </div>
    </nav> */}
    {/* <section className="intro">
      <div className="overlay" />
      <header>
        <h1>Vote for the change You want</h1>
        <h2> Welcome to the online voting platform that let's you vote for your political Candidate.</h2>
      </header>
    </section> */}
    <section className="why">
      <header>
        <p className="centrem">
          Welcome to
          <span> Politico, </span>
          vote at the click of a button!
        </p>
      </header>
      <div className="box-container">
        <div className="box">
          <i className="fas fa-user-shield" />
          <h3>Secure Voting</h3>
          <p className="white">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className="box">
          <i className="far fa-handshake" />
          <h3>interact With Candidates</h3>
          <p className="white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
        </div>
        <div className="box">
          <i className="fas fa-vote-yea" />
          <h3>Get Results</h3>
          <p className="white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
        </div>
        <div className="box">
          <i className="fas fa-mobile-alt" />
          <h3>Get on the go</h3>
          <p className="white"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
        </div>
      </div>
    </section>
    {/* <Footer /> */}
  </div>
);

export default HomePage;
