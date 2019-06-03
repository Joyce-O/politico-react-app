import React from 'react';

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
          <li>
            <a id="signup-btnm" href="/login">Login</a>
          </li>
        </ul>
      </div>
    </header>
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
          <p className="white"> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
        </div>
        <div className="box">
          <i className="far fa-handshake" />
          <h3>interact With Candidates</h3>
          <p className="white"> Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
        </div>
        <div className="box">
          <i className="fas fa-vote-yea" />
          <h3>Get Results</h3>
          <p className="white"> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
        </div>
        <div className="box">
          <i className="fas fa-mobile-alt" />
          <h3>Get on the go</h3>
          <p className="white"> ext of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it </p>
        </div>
      </div>
    </section>
    <footer id="footer-hommy">
      <p id="footer-p">&#169;Joyce-O Designs ~ 2019 General Elections</p>
    </footer>
  </div>
);

export default HomePage;
